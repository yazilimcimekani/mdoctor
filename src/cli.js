const { clear } = require('./commands/');

module.exports = function cli() {
    this.version = 'Version 1.0.0';

    const commands = [
        {
            name: 'clear',
            description: 'Clears the console',
            run: clear
        }
    ];

    let usedCommand = commands.filter(function (command) {
        return command.name === 'clear';
    })[0];

    usedCommand.run();
};
