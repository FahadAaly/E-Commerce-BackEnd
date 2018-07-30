module.exports = function(app) {
 
    const category = require('../controller/category.controller.js');
 
    // Create a new product
    app.post('/api/category', category.create);
 
    // Retrieve all product
    app.get('/api/category', category.findAll);
}