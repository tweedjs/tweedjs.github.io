.PHONY: build
build: webpack copy

.PHONY: webpack
webpack:
	webpack

.PHONY: copy
copy:
	cp src/index.html dist
