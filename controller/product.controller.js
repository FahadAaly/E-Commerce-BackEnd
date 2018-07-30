const db = require('../config/db.config.js');
const Product = db.products;
 
// Post a Product
exports.create = (req, res) => {	
	// Save to MySQL database
	let product = req.body;
	Product.create(product).then(result => {		
		// Send created product to client
		res.json(result);
	});
};
 
// Fetch all Products
exports.findAll = (req, res) => {
	Product.findAll().then(products => {
	  // Send all products to Client
	  res.json(products);
	});
};
 
// Find a Product by Id
exports.findById = (req, res) => {	
	Product.findById(req.params.productId).then(product => {
		res.json(product);
	})
};

// Update a Product
exports.update = (req, res) => {
	let product = req.body;
	let id = req.body.id;
	Product.update(product, 
					 { where: {id: id} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a product with id = " + id});
				   });	
};
 
// Delete a Product by Id
exports.delete = (req, res) => {
	const id = req.params.productId;
	console.log(id);
	Product.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a product with id = ' + id});
	});
};