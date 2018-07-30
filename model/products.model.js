
module.exports = (sequelize, Sequelize) => {
	const Products = sequelize.define('products', {
	  title: {
		type: Sequelize.STRING
	  },
	  price: {
		type: Sequelize.STRING
	  },
	  category: {
		  type: Sequelize.STRING
      },
      imageUrl: {
        type: Sequelize.STRING
    }
	});
	
	return Products;
}