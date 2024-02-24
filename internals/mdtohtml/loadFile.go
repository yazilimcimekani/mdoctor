package mdtohtml

import (
	"log"
	"os"

	homedir "github.com/mitchellh/go-homedir"
)

func LoadFile(filePath string) string {
	if filePath == "" {
		filePath = "README.md"
	} else if len([]rune(filePath)) < 3 || filePath[len([]rune(filePath))-3:] != ".md" {
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
