package cmd

import (
	"os"

	"github.com/spf13/cobra"
)

func Root(cmd *cobra.Command, args []string) {
	Version(cmd, args)
	os.Exit(0)
}
