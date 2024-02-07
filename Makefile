APP_NAME := "mdoctor"

tidy:
	@go mod tidy

run:
	@go run main.go

build:
	@go build -o bin/$(APP_NAME) main.go
