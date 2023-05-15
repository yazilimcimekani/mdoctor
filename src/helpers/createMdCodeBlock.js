function codeBlock(lang, commands) {
    return `\`\`\`${lang}
${commands.join('\n')}
\`\`\``;
}

export default codeBlock;
