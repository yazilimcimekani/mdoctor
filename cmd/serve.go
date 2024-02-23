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
	Args:  cobra.MaximumNArgs(1),
	Example: `mdoctor serve docs.md --port 8081`,
}

func CmdServe(cmd *cobra.Command, args []string) {
	if len(args) == 0 {
		args = append(args, "README.md")
	}
	server.Start(port, args[0])
	os.Exit(0)
}

func init() {
	rootCmd.AddCommand(cmdServe)
	cmdServe.Flags().Uint16VarP(&port, "port", "p", 8080, "Port to serve the markdown files")
}
