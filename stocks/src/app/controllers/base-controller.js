const templates = require('../views/templates');

class BaseController {
	static routes() {
		return {
			home: '/',
		};
	}

	home() {
		return function (req, resp) {
			resp.marko(templates.base.home);
		};
	}
}

module.exports = BaseController;
