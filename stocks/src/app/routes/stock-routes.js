const Stock = require('../models/stock');
const StockController = require('../controllers/stock-controller');
const stockController = new StockController();

module.exports = (app) => {
	const stockRoutes = StockController.routes();
	app.get(stockRoutes.list, stockController.list());
	app
		.route(stockRoutes.buy)
		.get(stockController.form())
		.post(Stock.validation(), stockController.buy())
		.put(stockController.update());
	app.get(stockRoutes.negotiate, stockController.negotiate());
	app.delete(stockRoutes.delete, stockController.delete());
};
