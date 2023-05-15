import commands from './commands.js';

async function cli(args) {
    args = args.slice(2);
    if (args.length == 0) return;

    let cmdName = args[0];
    let command = commands.filter((f) => f.data.name == cmdName);

    if (command[0]) return command[0].run();
    else {
        console.log(`'${cmdName}' is not a MDoctor command`);
        process.exit(1);
    }
}

export default cli;
