blog-node
=========

Blog based on Express and nodejs

Refer to https://github.com/nswbmw/N-blog/wiki/%E7%AC%AC1%E7%AB%A0--%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84%E5%8D%9A%E5%AE%A2


Quick Start
========
Clone the code
```
git clone https://github.com/pjq/blog-node.git
cd blog-node
npm install
```
Start mongodb
```
mkdir db/
mongod -dbpath db/
```
Start the app, you can use forever or supervisor or just call node
```
node www/bin
```
Then you already get you baby site
```
http://127.0.0.1:3000/
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

Auto deploy API
========
Call this API to get the latest code, actually it will run
```
git pull origin master
```
So you had better use supervisor to run the app
```
screen -S node
npm install -g supervisor
supervisor bin/www
```

Then you can call this API to deploy the latest code
```
http://host:port/admin/deploy
```
