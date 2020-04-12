project=multipl
name=website

.PHONY:build
build:
	npm run-script build
	docker image build \
		-t ${project}/${name}:latest \
		.

.PHONY:run
run:
	docker container run \
		--rm \
		-p 3000:80 \
		-t ${project}/${name}:latest
