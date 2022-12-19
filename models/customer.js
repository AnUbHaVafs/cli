// const mongoose = require('mongoose');
import mongoose from 'mongoose';
mongoose.set('strictQuery', false);
const addressSchema = mongoose.Schema({
    street: String,
    city: String
})

const customerSchema = mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    phone: { type: String },
    email: { type: String },
    name: String,
    age: {
        type: Number,
        min: 1,
        max: 40,

        validate: {
            validator: v => v % 2 === 0,
            message: props => `${props.value} is not an even number`
        }
    },
    email: {
        type: String,
        minLength: 10,
        required: true,
        lowercase: true
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    },
    bestfriend: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    hobbies: [String],
    address: addressSchema

});

customerSchema.methods.sayHi = function () {
    console.log(`Hi! My name is ${this.name}`)
}
customerSchema.statics.findByName = function (userName) {
    return this.where("name").equals(userName).limit(1);
}
export default mongoose.model('Customer', customerSchema);
/////////////////////////////////////////////////////////////



// userSchema.virtual("namedEmail").get(function () {
//     return `${this.name} <${this.email}> `
// })
//middlewares in mongodb

// userSchema.pre("save", function (doc, next) {
//     // doc.sayHi()
//     next()
// })
/////////////////////////////////////////////////////////////










// C:\\Program Files\\Git\\git-bash.exe
// module.exports = mongoose.model('Customer', customerSchema);
// export const Customer = mongoose.model('Customer', customerSchema);
// export { Customer }
