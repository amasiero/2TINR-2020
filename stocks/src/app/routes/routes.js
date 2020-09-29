const baseRoutes = require('./base-routes');
const stockRoutes = require('./stock-routes');

module.exports = (app) => {
	baseRoutes(app);
	stockRoutes(app);
};
