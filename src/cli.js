const { clear } = require('./commands/');

module.exports = function cli(args) {
    this.version = 'Version 1.0.0';

    const commands = [
        {
            name: 'clear',
            description: 'Clears the console',
            run: clear
        }
    ];
    let userArgs = args.slice(2);
    let usedCommand = commands.filter(function (command) {
        return command.name === userArgs[0];
    })[0];

    if (!usedCommand)
        return console.log(
            `Can't find command with name ${userArgs[0] ? userArgs[0] : 'null'}`
        );
    usedCommand.run();
};
