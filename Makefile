build:
	yarn build

serve: build
	yarn start


docker-build:
	docker build -t carmentis-docs . -f docker/Dockerfile
