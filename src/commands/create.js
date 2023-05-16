import chalk from 'chalk';
import fs from 'fs';
import inquirer from 'inquirer';
import path from 'path';
import createMdTemplate from '../helpers/createMdTemplate.js';

export default {
    data: {
        name: 'create',
        description: 'Creates a README.md file for your project'
    },
    run: async () => {
        let defaultFileName = `README`;
        let filePath = (fileName) => path.join('./', fileName + '.md');

        const questions = [
            {
                name: 'name',
                type: 'input',
                message: 'Name of your app?',
                default: 'myApp'
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
        ];

        await fs.promises
            .access(filePath(defaultFileName))
            .then(async () => {
                await inquirer
                    .prompt([
                        {
                            name: 'overwrite',
                            type: 'confirm',
                            message:
                                '! README.md already exists. Do you want to overwrite it?'
                        }
                    ])
                    .then(async (answer) => {
                        if (!answer.overwrite) {
                            await inquirer
                                .prompt([
                                    {
                                        name: 'rename',
                                        type: 'input',
                                        message:
                                            'What should be the name of the new file?'
                                    }
                                ])
                                .then((answer) => {
                                    defaultFileName = answer.rename;
                                });
                        }
                    });
            })
            .catch(() => {});

        await inquirer
            .prompt(questions)
            .then((answer) => {
                let content = createMdTemplate(
                    answer.name.trim(),
                    answer.short_description.trim(),
                    answer.clone_url.trim(),
                    answer.install_command.trim()
                );

                /*  Disabled eslint security check because we are using ./ to write to the current directory */

                // eslint-disable-next-line
                fs.writeFileSync(filePath(defaultFileName), content, (err) => {
                    console.log(err);
                    process.exit(1);
                });

                let successMsg = `${chalk.bold(
                    defaultFileName + '.md'
                )} created successfully!`;
                console.log(successMsg);
                process.exit(0);
            })
            .catch((err) => {
                console.log(err);
                process.exit(1);
            });
    }
};
