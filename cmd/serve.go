package cmd

import (
	"os"

	"github.com/spf13/cobra"
	"github.com/yazilimcimekani/mdoctor/internals/server"
)

var port uint16

var cmdServe = &cobra.Command{
	Use:   "serve",
	Short: "Serve markdown files as a web server",
	Long:  `Serve your markdown files as a web server.`,
	Run:   CmdServe,
}

func CmdServe(cmd *cobra.Command, args []string) {
	server.Start(port)
	os.Exit(0)
}

func init() {
	rootCmd.AddCommand(cmdServe)
	cmdServe.Flags().Uint16VarP(&port, "port", "p", 8080, "Port to serve the markdown files")
}
