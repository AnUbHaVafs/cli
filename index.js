// this contains all methods to interact with the model

const { default: mongoose } = require("mongoose")
mongoose.set('strictQuery', false);

// Map global promise : get rid of warning
mongoose.Promise = global.Promise
const db = mongoose.connect('mongodb://localhost:27017/customercli',// { //it will auto create the db.
    //useMongoClient: true //to get rid of warning
    //}
)
// Import Model
const Customer = require('./models/customer');

// Adding Customer
const addCustomer = (customer) => {
    Customer.create(customer).then((customer) => {
        console.info("New Customer Added");
        // db.close();
    });
}

const findCustomer = (name) => {
    //make that name first case in-sensitive 
    const search = new RegExp(name, 'i'); // i for in-sensitive
    Customer.find({ $or: [{ firstname: search }, { lastname: search }] })
        .then(customer => {
            console.info(customer);
            console.info(`${customer.length} found !`);
            // db.close();
        });
}
const updateCustomer = (_id, customer) => {
    Customer.update({ _id }, customer)
        .then((customer) => {
            console.info('Customer Updated');
            // db.close();
        });
}

const removeCustomer = (_id) => {
    Customer.remove({ _id })
        .then((customer) => {
            console.info('Customer Removed');
            // db.close();
        });
}
const listCustomers = () => {
    Customer.find()
        .then((customer) => {
            console.info(customer);
            console.info(`${customer.length} found !`);
            // db.close();
        });
}
module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomers
}
// C:\Users\user pc\Desktop\CLI --location of the project

