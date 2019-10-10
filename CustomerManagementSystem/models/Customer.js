var mongoose = require('mongoose');

// var CustomerSchema = new mongoose.Schema({
//   isbn: String,
//   title: String,
//   author: String,
//   description: String,
//   published_year: String,
//   publisher: String,
//   updated_date: {type: Date, default: Date.now},
// });
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
