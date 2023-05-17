function Heading(level, content) {
    if (!level) return new Error('Heading level must be specified');
    else if (level < 1 || level > 6)
        return new Error('Heading level must be between 1 and 6');

    return `${'#'.repeat(level)} ${content}`;
}

export default Heading;
