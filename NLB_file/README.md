# How to use

## Order to use

1. Dockerfile
```
cd dockerfile_application
docker build -t nodejsAPI:v1 .
```
2. Cluster
```
eksctl create cluster -f Cluster.yaml
```
3. deployment
```
kubectl apply -f deployment.yaml
```
4. Service
```
kubectl apply -f service.yaml
```
