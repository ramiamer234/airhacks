#!/bin/sh
mvn clean package && docker build -t com.airhacks/architectures .
docker rm -f architectures || true && docker run -d -p 8080:8080 -p 4848:4848 --name architectures com.airhacks/architectures 
