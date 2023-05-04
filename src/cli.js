import fsp from 'fs/promises';
const commands = [];

async function cli(args) {
    await fsp
        .readdir('src/commands', { encoding: 'utf-8' })
        .then(async (file) => {
            file.filter((f) => f.endsWith('.js')).forEach(async (f) => {
                const command = await import(`./commands/${f}`);
                commands.push(command.default);

                // Check command
                let userArgs = args.slice(2);
                let usedCommand = commands.filter(function (command) {
                    return command.data.name === userArgs[0];
                })[0];

                // Run the command if it's available
                if (!usedCommand) return process.exit(1);
                usedCommand.run();
            });
        })
        .catch(async (e) => {
            console.log(e);
        });
}

export default cli;
