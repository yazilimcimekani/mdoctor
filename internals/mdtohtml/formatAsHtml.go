package mdtohtml

import (
	"fmt"
	"reflect"
)

func FormatAsHtml(tagName string, content string) string {
	type HtmlTags struct {
		Heading1       string
		Heading2       string
		Heading3       string
		Heading4       string
		Heading5       string
		Heading6       string
		CodeSingleLine string
		CodeMultiLine  string
		Text           string
	}

	htmlTags := HtmlTags{
		Heading1:       "<h1>%s</h1>",
		Heading2:       "<h2>%s</h2>",
		Heading3:       "<h3>%s</h3>",
		Heading4:       "<h4>%s</h4>",
		Heading5:       "<h5>%s</h5>",
		Heading6:       "<h6>%s</h6>",
		CodeSingleLine: "<code>%s</code>",
		CodeMultiLine:  "<code>%s</code>",
		Text:           "<p>%s</p>",
	}

	val := reflect.ValueOf(htmlTags)
	typ := reflect.TypeOf(htmlTags)

	var result string

	for i := 0; i < val.NumField(); i++ {
		fieldName := typ.Field(i).Name
		fieldValue := val.Field(i).Interface()
		if fieldName == tagName {
			result = fmt.Sprintf(fieldValue.(string), content)
			break
		}
	}

	return result
}
