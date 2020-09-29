const BaseController = require('../controllers/base-controller');
const baseController = new BaseController();

module.exports = (app) => {
	const baseRoutes = BaseController.routes();
	app.get(baseRoutes.home, baseController.home());
};
