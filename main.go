package main

import (
	"github.com/spf13/cobra"
	"github.com/yazilimcimekani/mdoctor/cmd"
)

func main() {
	var rootCmd = &cobra.Command{
		Use:   "mdoctor",
		Short: "MDoctor is a markdown server and helper",
		Run:   cmd.Root,
	}

	var cmdServe = &cobra.Command{
		Use:   "serve",
		Short: "Serve markdown files as a web server",
		Long:  `Serve your markdown files as a web server.`,
		Run:   cmd.Serve,
	}

	var cmdVersion = &cobra.Command{
		Use:   "version",
		Short: "Print the version of MDoctor",
		Run:   cmd.Version,
	}

	rootCmd.AddCommand(cmdServe)
	rootCmd.AddCommand(cmdVersion)

	var portFlag int
	cmdServe.Flags().IntVarP(&portFlag, "port", "p", 5000, "Port to serve the markdown files")

	rootCmd.Execute()
}
