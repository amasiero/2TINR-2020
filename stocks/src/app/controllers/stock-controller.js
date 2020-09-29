const db = require('../../config/database');
const StockDao = require('../infra/stock-dao');
const { validationResult } = require('express-validator/check');
const templates = require('../views/templates');

class StockController {
	static routes() {
		return {
			list: '/stocks',
			buy: '/stocks/buy',
			negotiate: '/stocks/buy/:id',
			delete: '/stocks/:id',
		};
	}

	list() {
		return function (req, resp) {
			const dao = new StockDao(db);
			dao
				.list()
				.then((stocks) =>
					resp.marko(templates.stocks.portifolio, {
						stocks,
					})
				)
				.catch((err) => console.error(err));
		};
	}

	form() {
		return function (req, resp) {
			resp.marko(templates.stocks.new, { stock: {} });
		};
	}

	negotiate() {
		return function (req, resp) {
			const id = req.params.id;
			const stockDao = new StockDao(db);

			stockDao
				.findById(id)
				.then((stock) => resp.marko(templates.stocks.new, { stock }))
				.catch((err) => console.error(err));
		};
	}

	buy() {
		return function (req, resp) {
			console.log(req.body);
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return resp.marko(templates.stocks.new, {
					stock: req.body,
					errors: errors.array(),
				});
			}

			const dao = new StockDao(db);
			dao
				.save(req.body)
				.then(resp.redirect('/stocks'))
				.catch((err) => console.error(err));
		};
	}

	update() {
		return function (req, resp) {
			console.log(req.body);
			const dao = new StockDao(db);
			dao
				.update(req.body)
				.then(resp.redirect('/stocks'))
				.catch((err) => console.error(err));
		};
	}

	delete() {
		return function (req, resp) {
			const id = req.params.id;

			const stockDao = new StockDao(db);
			stockDao
				.delete(id)
				.then(resp.status(200).end())
				.catch((err) => console.error(err));
		};
	}
}

module.exports = StockController;
