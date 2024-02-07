package cmd

import (
	"fmt"
	"os"

	"github.com/spf13/cobra"
	"github.com/yazilimcimekani/mdoctor/internals/server"
)

func Serve(cmd *cobra.Command, args []string) {
	port, _ := cmd.Flags().GetInt("port")

	server.Start(fmt.Sprintf("%d", port))
	os.Exit(0)
}
