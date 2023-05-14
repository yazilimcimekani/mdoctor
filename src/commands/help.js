import chalk from 'chalk';
import getVersion from '../helpers/getVersion.js';

export default {
    data: {
        name: 'help'
    },
    run: () => {
        let links = {
            _documentation: 'https://github.com/yazilimcimekani/mdoctor#readme'
        };
        let texts = {
            _heading: `${chalk.bold('MDoctor Help Menu')}`,
            _version: `Version: ${chalk.yellow(getVersion())}`,
            _commandWarning: `All commands are prefixed with ${chalk.green(
                'mdoctor'
            )}.`,
            _documentation: `Please see the ${chalk.yellow(
                'documentation'
            )} for more details\n${links._documentation}`,
            help: 'Shows this menu',
            version: 'Shows the app version',
            create: 'Creates a README.md file for your project'
        };

        let helpMenu = `${texts._heading}
${texts._version}

${texts._commandWarning}

        help: ${texts.help}
        version: ${texts.version}
        create: ${texts.create}
        
${texts._documentation}`;

        console.log(helpMenu);
        process.exit(0);
    }
};
