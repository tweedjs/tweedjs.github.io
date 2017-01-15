DATE=$(shell date +"%Y-%m-%d %H:%M:%S")

.PHONY: build
build: webpack copy

.PHONY: dev
dev: webpack-dev-server

.PHONY: webpack
webpack:
	NODE_ENV=production webpack

.PHONY: copy
copy:
	mkdir -p dist && \
	cp node_modules/tweed/tweed.min.js dist/tweed.js && \
	cp node_modules/tweed-peek/tweed-peek.min.js dist/peek.js && \
	cp src/index.html dist && \
	cp src/Pages/Start/tweed-logo.svg dist

.PHONY: commit
commit: build
	git add dist && \
		git commit -m "Distribution $(DATE)"

.PHONY: push
push: commit
	git subtree push --prefix dist origin master

.PHONY: webpack-dev-server
webpack-dev-server:
	webpack-dev-server \
		--content-base dist/ \
		--inline \
		--hot
