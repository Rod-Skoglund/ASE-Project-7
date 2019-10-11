var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  custid: String,
  name: String,
  address: String,
  phone: String,
  email: String
});
/**
 * @class Customer
 * @typeof Model<CustomerSchema>
 */
const Customer = mongoose.model('asecustomercollection',CustomerSchema);
module.exports = Customer;
