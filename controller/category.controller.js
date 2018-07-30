const db = require('../config/db.config.js');
const Category = db.category;
 
// Post a Category
exports.create = (req, res) => {	
	// Save to MySQL database
	let category = req.body;
	Category.create(category).then(result => {		
		// Send created category to client
		res.json(result);
	});
};
 
// Fetch all Categorys
exports.findAll = (req, res) => {
	Category.findAll().then(categories => {
	  // Send all categories to Client
	  res.json(categories);
	});
};