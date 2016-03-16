/**
 * This script automatically creates a default Admin user when an
 * empty database is used for the first time. You can use this
 * technique to insert data into any List you have defined.
 * 
 * Alternatively, you can export a custom function for the update:
 * module.exports = function(done) { ... }
 */
var keystone = require('keystone'),
	async = require('async'),
    User = keystone.list('User');

var admins = [
	{ 'name.first': 'Admin', 'name.last': 'User', email: 'raynjamin@gmail.com', password: 'lkjwer0l', isAdmin: true }
];

function createAdmin(admin, done) {
	
	var newAdmin = new User.model(admin);
	
	newAdmin.isAdmin = true;
	newAdmin.save(function(err) {
		if (err) {
			console.error("Error adding admin " + admin.email + " to the database:");
			console.error(err);
		} else {
			console.log("Added admin " + admin.email + " to the database.");
		}
		done(err);
	});
}

exports = module.exports = function(done) {
    async.forEach(admins, createAdmin, done);
};