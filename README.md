# user_management_redis
#Node, #Express, #React, #Redux, #Redis

### Basic management of users using Redis. Following operations are supported:
* Search User
* Add user
* Delete User

#### Backend is designed using Node and Express JS. Redis is running on docker.

#### Frontend is designed using React, Redux and React-Routes. Code is written in functional style using features >= React 16.8

## Backend API details

## Add user:
```
POST  http://localhost:3005/api/users/

Payload:

{
	"id": "tushargoel86",
	"name": "tushar goel",
	"email": "tushargoel86@gmail.com",
	"phone": "0123456789"
}

Validation: 6 =< id length >= 15, name chars >= 2, phone length >= 8
```
## Search User
```
POST  http://localhost:3005/api/users/{userToSearch}

ex: http://localhost:3005/api/users/tushargoel86
```

## Delete User
```
Delete:   http://localhost:3005/api/users/{userToDelete}

ex: http://localhost:3005/api/users/tushargoel86
```

## How to run
* Start docker for Redis. I mapped 6379 port
```
docker pull redis
docker run -it --name my-redis -p 6379:6379 redis
```
* Run Node server now to start backend services. Right now it is running on 3005 port. Change the config ![here](https://github.com/tushargoel86/user_management_redis/blob/master/backend/.env)
```
cd backend;
npx nodemon or npm start
```

* Once your server is start, UI. Right now running on port 3000
```
cd ui
yarn start
```

## Screenshots:

![](https://github.com/tushargoel86/user_management_redis/blob/master/images/home.png)
![](https://github.com/tushargoel86/user_management_redis/blob/master/images/AddUser.PNG) ![](https://github.com/tushargoel86/user_management_redis/blob/master/images/Search.PNG)



