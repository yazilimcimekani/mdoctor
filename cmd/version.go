package cmd

import (
	"fmt"
	"log"
	"os"

	"github.com/spf13/cobra"
)

var cmdVersion = &cobra.Command{
	Use:   "version",
	Short: "Print the version of MDoctor",
	Run:   CmdVersion,
}

func CmdVersion(cmd *cobra.Command, args []string) {
	version, err := os.ReadFile("VERSION")

	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("MDoctor %s\n", version)
}

func init() {
	rootCmd.AddCommand(cmdVersion)
}
