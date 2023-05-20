import getVersion from '../helpers/getVersion.js';

export default {
    data: {
        name: 'version',
        description: 'Shows the app version'
    },
    run: () => {
        console.log(getVersion());
        process.exit(0);
    }
};
