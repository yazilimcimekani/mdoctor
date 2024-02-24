package server

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/yazilimcimekani/mdoctor/internals/mdtohtml"
)

func Start(port uint16, filePath string) {
	if port == 0 {
		port = 8080
	}
	var startMessage string = fmt.Sprintf("Server started on http://localhost:%d", port)

	// Define the routes
	http.Handle("/public/", http.StripPrefix("/public/", http.FileServer(http.Dir("public"))))
	http.HandleFunc("/", Markdown(filePath))

	// Start the server with logging
	log.Println(startMessage)
	err := http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
	if err != nil {
		log.Fatal(err)
	}

	log.Println("Shutting down gracefully...")
}

func Markdown(filePath string) func(w http.ResponseWriter, r *http.Request) {
	const mdTemplatePath = "views/md.html"

	markdownContent := mdtohtml.MarkdownToHtml(mdtohtml.LoadMdFile(filePath))
	html, htmlReadErr := os.ReadFile(mdTemplatePath)
	if htmlReadErr != nil {
		log.Fatal(htmlReadErr)
	}
	fullHTML := fmt.Sprintf(string(html), markdownContent)

	return func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte(fullHTML))
	}
}
