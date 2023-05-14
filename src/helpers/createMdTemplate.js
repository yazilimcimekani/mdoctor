import codeBlock from './createMdCodeBlock.js';

function createContent(name, shortDescription, clone_url, install_command) {
    return `# ${name}

${shortDescription}

## Installation

### Clone

${codeBlock('shell', [clone_url])}

### Install

${codeBlock('shell', ['git clone ' + install_command])}
`;
}

export default createContent;
