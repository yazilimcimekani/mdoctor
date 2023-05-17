function CodeBlock(content, language) {
    return `${'`'.repeat(3)}${language || ''}
${content}
${'`'.repeat(3)}`;
}

export default CodeBlock;
