import inquirer from 'inquirer';
import fs from 'fs';
import createMdTemplate from '../helpers/createMdTemplate.js';

export default {
    data: {
        name: 'create'
    },
    run: async () => {
        await inquirer
            .prompt([
                {
                    name: 'name',
                    type: 'input',
                    message: 'Name of your app?',
                    default: 'myTemplate'
                },
                {
                    name: 'short_description',
                    type: 'input',
                    message: 'Short Description of your app?'
                },
                {
                    name: 'clone_url',
                    type: 'input',
                    message: 'What is the clone url of your app?'
                },
                {
                    name: 'install_command',
                    type: 'input',
                    message: 'What is the install/build command of your app?'
                }
            ])
            .then((answer) => {
                let content = createMdTemplate(
                    answer.name.trim(),
                    answer.short_description.trim(),
                    answer.clone_url.trim(),
                    answer.install_command.trim()
                );

                fs.writeFileSync(`./README.md`, content, (err) => {
                    console.log(err);
                    process.exit(1);
                });
                process.exit(0);
            })
            .catch((err) => {
                console.log(err);
                process.exit(1);
            });
    }
};
