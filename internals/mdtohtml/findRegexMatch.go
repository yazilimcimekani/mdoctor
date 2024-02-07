package mdtohtml

import (
	"reflect"
	"regexp"
)

func FindRegexMatch(md string) (string, string) {
	// Reverse the order of the regex patterns to match the most specific one first
	type RegexPatterns struct {
		Heading6       string
		Heading5       string
		Heading4       string
		Heading3       string
		Heading2       string
		Heading1       string
		CodeSingleLine string
		CodeMultiLine  string
		Text           string
	}

	patterns := RegexPatterns{
		Heading6:       `^######+\s(.+)$`,
		Heading5:       `^#####+\s(.+)$`,
		Heading4:       `^####+\s(.+)$`,
		Heading3:       `^###+\s(.+)$`,
		Heading2:       `^##+\s(.+)$`,
		Heading1:       `^#+\s(.+)$`,
		CodeSingleLine: "^```(.+)```$",
		CodeMultiLine:  `^` + "```" + `(.+)` + "```" + `$`,
		Text:           `^(.+)$`,
	}
	val := reflect.ValueOf(patterns)
	typ := reflect.TypeOf(patterns)

	var md_content string
	var md_field string

	for i := 0; i < val.NumField(); i++ {
		fieldName := typ.Field(i).Name
		fieldValue := val.Field(i).Interface()
		pattern := regexp.MustCompile(fieldValue.(string))
		match := pattern.FindStringSubmatch(md)
		if match != nil {
			// fmt.Printf("Markdown: %s\nIsMatched With %s | %s\nResult: %s\n---\n", md, fieldName, fieldValue, match)
			// fmt.Printf("Matched: %s\n", match[1])
			md_field = fieldName
			md_content = match[1]
			break
		}
	}
	return md_field, md_content
}
