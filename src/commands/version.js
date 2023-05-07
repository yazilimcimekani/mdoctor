import pkg from '../../package.json' assert { type: 'json' };

export default {
    data: {
        name: 'version'
    },
    run: () => {
        let version = 'v' + pkg.version;
        console.log(version);
        process.exit(0);
    }
};
