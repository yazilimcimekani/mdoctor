package cmd

import (
	"github.com/spf13/cobra"
)

var versionFlag bool

var rootCmd = &cobra.Command{
	Use:   "mdoctor",
	Short: "MDoctor is a markdown server and helper",
	Run:   CmdRoot,
}

func CmdRoot(cmd *cobra.Command, args []string) {
	if versionFlag {
		CmdVersion(cmd, args)
	}
	err := cmd.Help()
	if err != nil {
		panic(err)
	}
}

func init() {
	rootCmd.Flags().BoolVarP(&versionFlag, "version", "v", false, "Print version information and quit")
}

func Execute() {
	err := rootCmd.Execute()
	if err != nil {
		panic(err)
	}
}
