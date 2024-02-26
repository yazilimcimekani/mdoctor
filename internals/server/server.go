package server

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/yazilimcimekani/mdoctor/internals/mdtohtml"
)

func Start(port uint16, filePath string) {
	if port == 0 {
		port = 8080
	}

	srv := &http.Server{Addr: fmt.Sprintf(":%d", port)}

	// Define the routes
	http.Handle("/public/", http.StripPrefix("/public/", http.FileServer(http.Dir("internals/server/public"))))
	http.HandleFunc("/", Markdown(filePath))

	// Start the server in a goroutine
	go func() {
		startMessage := fmt.Sprintf("Listening on http://localhost:%d", port)
		fmt.Println(startMessage)

		err := srv.ListenAndServe()
		if err != nil && err != http.ErrServerClosed {
			log.Fatalf("Server down: %v", err)
		}
	}()

	stopChan := make(chan os.Signal, 1)
	signal.Notify(stopChan, os.Interrupt, syscall.SIGTERM)

	<-stopChan
	fmt.Println("Shutting down the server...")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	// Shutting down the server gracefully
	err := srv.Shutdown(ctx)
	if err != nil {
		fmt.Printf("Shutdown request error: %v\n", err)
	} else {
		fmt.Println("Server gracefully stopped")
	}
}

func Markdown(filePath string) func(w http.ResponseWriter, r *http.Request) {
	const mdTemplatePath = "internals/server/views/md.html"

	markdownContent := mdtohtml.MarkdownToHtml(mdtohtml.LoadMdFile(filePath))
	html, htmlReadErr := os.ReadFile(mdTemplatePath)
	if htmlReadErr != nil {
		log.Fatal(htmlReadErr)
	}
	fullHTML := fmt.Sprintf(string(html), markdownContent)

	return func(w http.ResponseWriter, r *http.Request) {
		_, err := w.Write([]byte(fullHTML))
		if err != nil {
			log.Fatal(err)
		}
	}
}
