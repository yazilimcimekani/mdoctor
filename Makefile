APP_NAME := "mdoctor"

.PHONY: tidy run build clean clean-build

.DEFAULT_GOAL := build

tidy:
	@go mod tidy

run:
	@go run main.go

build:
	@go build -o bin/$(APP_NAME) main.go

clean:
	@rm -rf bin

clean-build: clean build
