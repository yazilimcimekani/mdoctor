package mdtohtml

import (
	"log"
	"os"
)

func LoadFile(filePath string) string {
	fileContent, err := os.ReadFile(filePath)

	if err != nil {
		log.Fatal(err)
	}

	return string(fileContent)
}
