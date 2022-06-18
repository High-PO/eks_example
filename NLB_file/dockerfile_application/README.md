# Application Description 
This Application Create Language is Node.js and uses AWS SDK

Use Stack : 
- AWS_SDK
- DynamoDB
- AWS_CLI
- Docker
- git
- cURL
- Node.js

# Edit Part

server.js
```
<DynamoDB_Region>
```
```
<DynamoDB_Name>
```
Dockerfile
```
<Access_ID>
```
```
<Secret_Access_Key>
```
```
<Region>
```

# Git Clone & Dockerbuild
```
git clone https://github.com/High-PO/Nodejs_dynamoDB_app.git
docker build -t nodymo:2.3 .
```

# Work

POST Method
```
curl -d '{"id":"omy", "passwd":"1234"}' \
-H "Content-Type: application/json" \
-X POST http://<domain>:8080/ui
```
GET Method
```
curl -d '{"id":"omy"}' \
-H "Content-Type: application/json" \
-X GET http://<domain>:8080/ui
```

# Docker run Example
```
docker run - d -p 8080:8080 nodymo:2.3
```
