to start server:

cd into server folder
```
npm install
```

create database tables in testing db:
```
psql -f db_init.sql
```

run server with:
```
nodemon server.js
```

to run User.test.js:
```
NODE_ENV=test jest User.test.js
```