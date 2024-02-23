package cmd

import (
	"os"

	"github.com/spf13/cobra"
	"github.com/yazilimcimekani/mdoctor/internals/server"
)

func Serve(cmd *cobra.Command, args []string) {
	port, _ := cmd.Flags().GetUint16("port")

	server.Start(port)
	os.Exit(0)
}
