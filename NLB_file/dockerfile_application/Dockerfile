# Docker Base Image
# 기본이 되는 이미지
FROM node:16.15

# Use Command
# 사용하는 명령어
RUN mkdir -p /apiapp

# WORKDIR mean fixed and working dir
# WORKDIR의 의미는 작업하는 디렉토리를 지정하는 것.
WORKDIR /apiapp

# copy files to /apiapp
# 현재 디렉토리에 있는 파일을 /apiapp으로 복사한다.
ADD . /apiapp

# Use Command 
# 사용하는 명령어
RUN npm ci
RUN apt-get update
RUN apt-get install awscli -y
RUN aws configure set aws_access_key_id <Access_ID>
RUN aws configure set aws_secret_access_key <Secret_Access_Key>
RUN aws configure set region <Region>

# port listen
# 포트리스닝
EXPOSE 8080

# docker run -> CMD 
# 도커 실행 후 사용할 명령어
CMD ["node", "server.js"]