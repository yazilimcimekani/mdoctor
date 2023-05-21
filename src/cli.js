import commands from './commands.js';

function getCommand(cmd) {
    return commands.filter((command) => command.data.name === cmd)[0];
}

async function cli(args) {
    function runCommand() {
        try {
            getCommand(args._[0]).run(args);
        } catch (error) {
            console.log(`'${args._[0]}' is not a MDoctor command`);
        }
    }

    if (args._.length !== 0) {
        return runCommand();
    }

    if (args.version) {
        return getCommand('version').run();
    } else if (args.help) {
        return getCommand('help').run();
    }
}

export default cli;
