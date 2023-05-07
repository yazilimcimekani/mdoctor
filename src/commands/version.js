import getVersion from '../helpers/getVersion.js';

export default {
    data: {
        name: 'version'
    },
    run: () => {
        console.log(getVersion());
        process.exit(0);
    }
};
