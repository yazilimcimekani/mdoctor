package server

import (
	"fmt"
	"log"
	"net/http"

	"github.com/yazilimcimekani/mdoctor/internals/mdtohtml"
)

func Start(port uint16) {
	if port == 0 {
		port = 8080
	}
	var startMessage string = fmt.Sprintf("Server started on http://localhost:%d", port)

	// Define the routes
	http.Handle("/public/", http.StripPrefix("/public/", http.FileServer(http.Dir("public"))))
	http.HandleFunc("/", Markdown())

	// Start the server with logging
	log.Println(startMessage)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", port), nil))

	log.Println("Shutting down gracefully...")
}

func Markdown() func(w http.ResponseWriter, r *http.Request) {
	const mdTemplatePath = "views/md.html"
	var html string = mdtohtml.LoadFile(mdTemplatePath)
	fullHTML := fmt.Sprintf(html, mdtohtml.MarkdownToHtml(mdtohtml.LoadFile("README.md")))

	return func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte(fullHTML))
	}
}
