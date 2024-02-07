package mdtohtml

import (
	"strings"
)

func MarkdownToHtml(md string) string {
	var html string

	lines := strings.Split(md, "\n")

	for _, line := range lines {
		field, content := FindRegexMatch(line)
		html += FormatAsHtml(field, content)
	}

	return html
}
