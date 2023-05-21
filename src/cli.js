import commands from './commands.js';

function getCommand(cmd) {
    return commands.filter((command) => command.data.name === cmd)[0];
}

async function cli(args) {
    if (args._.length !== 0) {
        try {
            getCommand(args._[0]).run(args);
        } catch (error) {
            console.log(`'${args._[0]}' is not a MDoctor command`);
        }
    }

    if (args.version || args.v) {
        return getCommand('version').run();
    } else if (args.help || args.h) {
        return getCommand('help').run();
    }
}

export default cli;
