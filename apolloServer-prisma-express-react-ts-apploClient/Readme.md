# Requirements

Version npm: 8.1.0

Node version: v16.13.0

Server run on port 5000

Client run on port 3000

Apollo server run on port 4000

ElasticMQ run on port 9324

ElasticMQ API run on port 9325 (if you use local service not docker )

# Follow to folder client

```
  cd /client/
```

# Install package write command:

```
npm install
```

# After install go to the folder server

```
  cd ../server/
```

# Install package write command:

```
npm install
```

# Init prisma:

```
 npx prisma init
```

# In server/.env/ DATABASE_URL you must connect you postgreSql :

# after you build model in prisma use :

```
 npx prisma migrate dev
    -y
    init
```

# to follow to prisma studio use :

```
 npx prisma studio
```

# For use sqs service you need ElasticMQ

https://github.com/softwaremill/elasticmq:

You can download the stand-alone distribution here: https://s3/.../elasticmq-server-1.3.9.jar

For run service use:

```
 java -jar elasticmq-server-1.3.9.jar
```

Or you can run service with docker, follow to /server/sqs-mock/ and run command

```
 docker build -t sqs-mock .

 docker run --name sqs-mock -p 9324:9324 -d sqs-mock
```

# After you can run project with two two ways :

1. Follow to /server and run command:

```
  npm run dev
```

2. Follow to /server and run command:

```
  npm run server
```

Follow to /client and run command:

```
  npm run start
```

# For switching print service (rest or sqs) in /server/.env change INTEGRATION_TRANSPORT to "sqs" or "rest:
