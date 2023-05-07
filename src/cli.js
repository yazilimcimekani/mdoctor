import fsp from 'fs/promises';

async function cli(args) {
    args = args.slice(2);
    if (args.length == 0) return;
    const cliCommands = [];

    fsp.readdir('src/commands', { encoding: 'utf-8' })
        .then(async (file) => {
            for (const cmd of file.filter((f) => f.endsWith('.js'))) {
                let importedCommand = await import(`./commands/${cmd}`);
                cliCommands.push(importedCommand.default);
            }
            let cmdName = args[0];
            let command = cliCommands.filter((f) => f.data.name == cmdName);

            if (command.length == 0) {
                console.log(`'${cmdName}' is not a MDoctor command`);
                process.exit(1);
            }
            const usedCommand = command[0];
            usedCommand.run();
        })
        .catch(async (e) => {
            console.log(e);
        });
}

export default cli;
