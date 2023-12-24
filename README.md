# user-data-processing

Getting the random user data and storing into redis. Getting the redis data and processing them to store into DB using cron.

### Features
- Using redis to store data to optimize the performance instead of getting from DB directly.
- Using cron to check every 3.5 hours

### Prerequisites
- Express
- Mongoose
- MongoDB
- Redis
- Cron
- Jest

### Installation
- git clone https://github.com/ilyasghowsy/user-data-processing.git
- npm install

### Server Configuration
PORT=3000

### MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/azTestDB

### Redis Configuration
REDIS_URL=redis://localhost:6379

### Usage
- npm install

### Testing
- npx jest

### Project Details
- index.ts
    - Server connection
    - MongoDB connection
    - Starting the process by importing worker.ts

- worker.ts
    - Starting cron
    - Fetching random user data by importing
    - Pushing random user data to redis queue by importing
    - Processing data to store into db by importing

- fetchUserData.ts
    - Fetching 10 random user data using https://randomuser.me/api/?results=10
    - Getting the request time, request URL, HTTP method, response JSON and response time and storing into db

- pushToRedisQueue.ts
    - Storing received random user data into redis queue

- dataProcessor.ts
    - Getting stored data from redis
    - Processing the random user data
    - Storing the processed data into db

- dbConfig.ts
    - Connecting to DB

- redisConfig.ts
    - Connecting to redis

- fetchUserData.test.ts
    - To check fetching data whether it has defined

- pushToRedisQueue.test.ts
    - To check whether the data will be stored into redis queue


