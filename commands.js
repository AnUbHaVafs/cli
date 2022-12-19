#!/user/bin/env mode
// const program = require('commander');
import { program } from 'commander';
// const inquirer = require('inquirer');
import inquirer from 'inquirer';
// import { welcome } from './quiz.js';
// const {
//     addCustomer,
//     findCustomer,
//     updateCustomer,
//     removeCustomer,
//     listCustomers,
//     isPhone

// } = require('./index');
import {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomers,
    isPhone

} from './index.js'

// import * as index from './index.js'
// console.log(index)
const questions = [
    {
        type: 'input',
        name: 'firstname',
        message: 'Customer First Name'
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'Customer last Name'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Customer Phone Number'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Customer Email Address'
    }
]

program
    .version('1.0.0')
    .description('Client Management System')

// program
//     .command('add <firstname> <lastname> <phone> <email>')
//     .alias('a')
//     .description('Add a customer')
//     .action((firstname, lastname, phone, email) => {
//         addCustomer({ firstname, lastname, phone, email });
//     });

program
    .command('add')
    .alias('a')
    .description('New Customer Added')
    .action(() => {
        inquirer.prompt(questions).then((answers) => {
            addCustomer(answers);
        })
    })


program
    .command('find <name>')
    .alias('f')
    .description('Find a customer')
    .action((name) => {
        findCustomer(name);
    });

program
    .command('update <_id> <firstname> <lastname> <phone> <email>')
    .alias('u')
    .description('Update a customer')
    .action((_id, firstname, lastname, phone, email) => {
        updateCustomer(_id, { firstname, lastname, phone, email });
    });


program
    .command('remove <_id>')
    .alias('r')
    .description('Remove a customer')
    .action((_id) => {
        removeCustomer(_id);
    });

program
    .command('list')
    .alias('l')
    .description('list a customer')
    .action(() => {
        listCustomers();
    });

program
    .command('isPhone <phone>')
    .alias('isp')
    .description('Phone exists or not')
    .action((phone) => {
        isPhone(phone);
    });

// program
//     .command('Quiz')
//     .alias('q')
//     .description('Starting Quiz')
//     .action(() => {
//         welcome();

//     });

program.parse(process.argv);   