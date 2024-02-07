package cmd

import (
	"fmt"
	"log"
	"os"

	"github.com/spf13/cobra"
)

func Version(cmd *cobra.Command, args []string) {
	version, err := os.ReadFile("VERSION")

	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("MDoctor %s\n", version)
	os.Exit(0)
}
