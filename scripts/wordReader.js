const fs = require('fs');
const path = require('path');
const { Transform } = require('stream');

async function readFile(letter) {
  const readInputStream = fs.createReadStream(path.join(__dirname, 'files/input.txt'));
  const writeOutputStream = fs.createWriteStream(path.join(__dirname, 'files/output.txt'));

  const filterStream = new Transform({
    transform(chunk, encoding, done) {
      const words = chunk
        .toString()
        .split('\n')
        .filter((word) => word[0] && word[0].toLowerCase() === letter);
      done(null, words.join('\n'));
    },
  });

  const uppercaseStream = new Transform({
    transform(chunk, encoding, done) {
      done(null, chunk.toString().toUpperCase());
    },
  });

  const statisticStream = new Transform({
    transform(chunk, encoding, done) {
      if (!this.lastLetterStatistic) this.lastLetterStatistic = {};

      chunk
        .toString()
        .split('\n')
        .forEach((word) => {
          if (word.length) {
            const lastLetter = word[word.length - 1];
            this.lastLetterStatistic[lastLetter] = this.lastLetterStatistic[lastLetter]
              ? this.lastLetterStatistic[lastLetter] + 1
              : 1;
          }
        });

      done();
    },
    flush(done) {
      if (!this.lastLetterStatistic) this.lastLetterStatistic = {};

      done(null, JSON.stringify(this.lastLetterStatistic, null, 2));
    },
  });

  readInputStream
    .pipe(filterStream)
    .pipe(uppercaseStream)
    .pipe(writeOutputStream);

  writeOutputStream.on('close', () => {
    const readOutputStream = fs.createReadStream(path.join(__dirname, 'files/output.txt'));
    const writeStreamStatistic = fs.createWriteStream(path.join(__dirname, 'files/result.txt'));

    readOutputStream
      .pipe(statisticStream)
      .pipe(writeStreamStatistic);
  });
}

readFile('a');
