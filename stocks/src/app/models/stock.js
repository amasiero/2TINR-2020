const { check } = require('express-validator/check');

class Stock {
	static validation() {
		return [
			check('code')
				.isLength({ min: 5, max: 5 })
				.withMessage('O código da ação precisa ter 5 caracteres.'),
			check('name')
				.isLength({ min: 5 })
				.withMessage('O nome da empresa deve ter no mínimo 5 caracteres.'),
			check('price')
				.isCurrency()
				.withMessage('O preço deve ser informado com o formato monetário.'),
			check('amount')
				.isNumeric()
				.withMessage('A quantidade deve ser númerica.'),
		];
	}
}

module.exports = Stock;
