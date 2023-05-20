import commands from './commands.js';

async function cli(args) {
    if (args.slice(2).length == 0) return;
    let userargs = [];
    for (const argument of args.slice(2)) {
        if (argument.startsWith('--') || argument.startsWith('-')) {
            userargs.push({
                name:
                    argument.replace('--', '') == argument
                        ? argument.replace('-', '')
                        : argument.replace('--', ''),
                type: 'flag'
            });
        } else {
            userargs.push({
                name: argument,
                type: 'command'
            });
        }
    }
    function getCommands(args) {
        return args.filter((f) => f.type == 'command');
    }

    function getFlags(args) {
        return args.filter((f) => f.type == 'flag');
    }

    let cmdName = getCommands(userargs)[0]?.name;
    let flagName = getFlags(userargs)[0]?.name;
    let command = commands.filter((f) => f.data.name == cmdName);

    if (command[0]) return command[0].run(userargs);
    else if (flagName) {
        console.log(`'${flagName}' is not a valid MDoctor flag`);
        process.exit(1);
    } else {
        console.log(`'${cmdName || flagName}' is not a MDoctor command`);
        process.exit(1);
    }
}

export default cli;
