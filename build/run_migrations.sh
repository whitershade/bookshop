fill_db() {
  sleep 5
  npm run db:fill > /dev/null
  lastCommandStatus=$?
}

echo "Running migrations ..."
  fill_db

  while [ $lastCommandStatus != 0 ]
  do
    fill_db
done
