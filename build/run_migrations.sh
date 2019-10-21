fill_db() {
  npm run db:fill > /dev/null
  lastCommandStatus=$?
}

echo "Running migrations ..."
  fill_db

  while [ $lastCommandStatus != 0 ]
  do
    sleep 5
    fill_db
done
