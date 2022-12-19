// this contains all methods to interact with the model
import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

// Map global promise : get rid of warning
mongoose.Promise = global.Promise

const db = mongoose.connect('mongodb://localhost:27017/customercli',// { //it will auto create the db.
    //useMongoClient: true //to get rid of warning
    //}
)

// Import Model
import Customer from './models/customer.js';

////////////////////////////////////////////////////////////////
/////////////////////// Adding Customer ////////////////////////

const addCustomer = (customer) => {
    Customer.create(customer).then((customer) => {
        console.info("New Customer Added");

        // db.close();
    });
}

////////////////////////////////////////////////////////////////
/////////////////////// Finding Customer ////////////////////////

const findCustomer = (name) => {
    //make that name first case in-sensitive 
    const search = new RegExp(name, 'i'); // i for in-sensitive
    Customer.findOne({ $or: [{ firstname: search }, { lastname: search }] })
        .then(customer => {

            console.info(customer);
            console.info(`${customer.length} found !`);
            customer.sayHi(name)
            // db.close();
        });
}

////////////////////////////////////////////////////////////////
/////////////////////// Updating Customer ////////////////////////

const updateCustomer = (_id, customer) => {
    Customer.update({ _id }, customer)
        .then((customer) => {
            console.info('Customer Updated');
            // db.close();
        }

        );


}

////////////////////////////////////////////////////////////////
/////////////////////// Removing Customer ////////////////////////

const removeCustomer = (_id) => {
    Customer.remove({ _id })
        .then((customer) => {
            console.info('Customer Removed');
            // db.close();
        });
}

////////////////////////////////////////////////////////////////
/////////////////////// listing Customer ////////////////////////

const listCustomers = () => {
    Customer.find()
        .then((customer) => {
            console.info(customer);
            console.info(`${customer.length} found !`);
            // db.close();
        });
}

////////////////////////////////////////////////////////////////
/////////////////////// isPhone exists ? ////////////////////////

async function isPhone(phoneNumber) {
    const customer = await Customer.find({ phone: { $eq: phoneNumber } })

    console.log(customer)
    console.log("ALL the users with this Number !")
}

// module.exports = {
//     addCustomer,
//     findCustomer,
//     updateCustomer,
//     removeCustomer,
//     listCustomers,
//     isPhone
// }
export {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomers,
    isPhone
}
// C:\Users\user pc\Desktop\CLI --location of the project

