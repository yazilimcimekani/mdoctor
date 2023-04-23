const { version } = require('./commands/');

function cli(args) {
    const commands = [
        {
            name: 'version',
            description: 'Shows the version',
            run: version
        }
    ];
    let userArgs = args.slice(2);
    let usedCommand = commands.filter(function (command) {
        return command.name === userArgs[0];
    })[0];

    if (!usedCommand && (userArgs[0] == '--version' || userArgs[0] == '-v'))
        return commands[0].run();
    else if (!usedCommand) return;

    usedCommand.run();
}

module.exports = cli;
