function Image(altText, path, title = 'Image') {
    return `![${altText}](${path} "${title}")`;
}

export default Image;
