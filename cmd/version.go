package cmd

import (
	"fmt"

	"github.com/spf13/cobra"
)

var cmdVersion = &cobra.Command{
	Use:   "version",
	Short: "Print the version of MDoctor",
	Run:   CmdVersion,
}

func CmdVersion(cmd *cobra.Command, args []string) {
	version := "1.0.0"
	fmt.Printf("MDoctor %s\n", version)
}

func init() {
	rootCmd.AddCommand(cmdVersion)
}
