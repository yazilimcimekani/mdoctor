import Markdown from '../helpers/markdown/index.js';

function DefaultTemplate(name, shortDescription, clone_url, install_command) {
    return `# ${name}

${shortDescription}

${Markdown.Heading(2, 'Installation')}

${Markdown.Heading(3, 'Clone')}

${Markdown.CodeBlock(clone_url, 'shell')}

${Markdown.Heading(3, 'Install')}

${Markdown.CodeBlock('git clone ' + install_command, 'shell')}
`;
}

export default DefaultTemplate;
