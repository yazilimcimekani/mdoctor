import fs from 'fs';
import path from 'path';

let filePath = (fileName) => path.join(process.cwd(), fileName + '.md');

function createMdFile(filename, content) {
    return new Promise((resolve, reject) => {
        if (!filename)
            reject({ status: 'FILENAME_ERR', message: 'Filename is required' });
        else if (!content)
            reject({ status: 'CONTENT_ERR', message: 'Content is required' });

        // eslint-disable-next-line
        fs.writeFileSync(filePath(filename), content, (err) => {
            reject(err);
            process.exit(1);
        });
        resolve({ status: 'OK', message: 'File created successfully' });
    });
}

export default createMdFile;
