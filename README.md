blog-node
=========

Blog based on Express and nodejs

Refer to https://github.com/nswbmw/N-blog/wiki/%E7%AC%AC1%E7%AB%A0--%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84%E5%8D%9A%E5%AE%A2

```
mongod -dbpath db/
```

Use supervisor to autoreload the app
========
```
npm install -g supervisor
supervisor bin/www
```

Check the mongodb
========
```
cd db
mongo
use blog
db.users.find()
```
