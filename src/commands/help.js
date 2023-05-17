import chalk from 'chalk';
import getVersion from '../helpers/getVersion.js';
import commands from '../commands.js';

export default {
    data: {
        name: 'help',
        description: 'Shows the help menu'
    },
    run: () => {
        let links = {
            _documentation: 'https://github.com/yazilimcimekani/mdoctor'
        };
        let texts = {
            _heading: `${chalk.bold('MDoctor Help Menu')}`,
            _version: `Version: ${chalk.yellow(getVersion())}`,
            _commandWarning: `All commands are prefixed with ${chalk.green(
                'mdoctor'
            )}.`,
            _documentation: `Please see the ${chalk.yellow(
                'documentation'
            )} for more details\n${links._documentation}`
        };

        let commandsAnDescription = ``;
        for (const cmd of commands) {
            commandsAnDescription += `    ${cmd.data.name}: ${cmd.data.description}\n`;
        }

        let helpMenu = `${texts._heading}
${texts._version}

${texts._commandWarning}

${commandsAnDescription}
${texts._documentation}`;

        console.log(helpMenu);
        process.exit(0);
    }
};
