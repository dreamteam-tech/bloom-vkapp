all: build deploy

build:
	yarn build
.PHONY: build

deploy:
	rsync -arcvp ./build/ u29@trinity:/home/u29/vkapp/
.PHONY: deploy
