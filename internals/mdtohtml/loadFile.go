package mdtohtml

import (
	"log"
	"os"

	homedir "github.com/mitchellh/go-homedir"
)

func LoadFile(filePath string) string {
	fileExtension := filePath[len(filePath)-3:]
	if fileExtension != ".md" {
		log.Fatal("File must be a markdown file")
	}

	dir, expandErr := homedir.Expand(filePath)
	if expandErr != nil {
		log.Fatal(expandErr)
	}

	fileContent, err := os.ReadFile(dir)

	if err != nil {
		log.Fatal(err)
	}

	return string(fileContent)
}
