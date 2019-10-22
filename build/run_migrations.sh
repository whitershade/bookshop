command="npm run $1:db:fill > /dev/null"

fill_db() {
  sleep 5
  eval "$command"
  lastCommandStatus=$?
}

echo "Running migrations ..."

fill_db

while [ $lastCommandStatus != 0 ]
do
  fill_db
done

echo "Migration finished"
