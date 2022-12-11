const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const customerSchema = mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    phone: { type: String },
    email: { type: String }
});
// C:\\Program Files\\Git\\git-bash.exe
module.exports = mongoose.model('Customer', customerSchema);