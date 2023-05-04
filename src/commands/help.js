export default {
    data: {
        name: 'help'
    },
    run: () => {
        let links = {
            docs: 'https://github.com/yazilimcimekani/mdoctor#readme'
        };

        let help = `MDoctor Help Menu
        
        help: Shows this menu
        version: Shows the app version
        `;

        console.log(help);
        console.log(
            `Please see the documentation for more details\n${links.docs}`
        );
        process.exit(0);
    }
};
