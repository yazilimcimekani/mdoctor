APP_NAME := "mdoctor"

.PHONY: tidy run build-all clean clean-build

.DEFAULT_GOAL := clean-build

tidy:
	@go mod tidy

run:
	@go run main.go

build-linux:
	@GOOS=linux GOARCH=amd64 go build -o bin/linux/$(APP_NAME)-linux-amd64 main.go
	@GOOS=linux GOARCH=arm64 go build -o bin/linux/$(APP_NAME)-linux-arm64 main.go

build-macos:
	@GOOS=darwin GOARCH=amd64 go build -o bin/darwin/$(APP_NAME)-darwin-amd64 main.go
	@GOOS=darwin GOARCH=arm64 go build -o bin/darwin/$(APP_NAME)-darwin-arm64 main.go

build-windows:
	@GOOS=windows GOARCH=amd64 go build -o bin/windows/$(APP_NAME)-windows-amd64 main.go
	@GOOS=windows GOARCH=arm64 go build -o bin/windows/$(APP_NAME)-windows-arm64 main.go

build-all: build-linux build-macos build-windows

clean:
	@rm -rf bin
	@rm -rf dist

clean-build: clean build-all
