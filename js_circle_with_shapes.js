class Shape {
	constructor(y, x, shapeColor, borderRadius, btnClass) {
		this._y = y;
		this._x = x;
		this._shapeColor = shapeColor;
		this._borderRadius = borderRadius;
		this._btnClass = btnClass;
	}

	// generateRandomRadius = function (min, max) {
	// 	return Math.abs(Math.floor(Math.random() * (min - max) + min));
	// };

	display = function () {
		return `<p style="position: absolute; top: ${this._y - 40}px; left: ${this._x - 80}px; width: 200px; height: 200px; border-radius:${
			this._borderRadius
		}%;" class="${this._shapeColor} ${this._btnClass}"></p>`;
	};
}

class Circles extends Shape {
	constructor(x, y, shapeColor, borderRadius, btnClass) {
		super(x, y, shapeColor, borderRadius, btnClass);
	}

	// display = function () {
	// 	return `<p style="position: absolute; top: ${this._y - 40}px; left: ${
	// 		this._x - 80
	// 	}px; width: 200px; border-radius:50%; height: 200px;" class="btn-circle ${this._shapeColor}"></p>`;
	// };
}

class Square extends Shape {
	constructor(x, y, shapeColor, borderRadius, btnClass) {
		super(x, y, shapeColor, borderRadius, btnClass);
	}

	// display = function () {
	// 	return `<p style="position: absolute; top: ${this._y - 40}px; left: ${
	// 		this._x - 80
	// 	}px; width: 200px; border-radius:0; height: 200px;" class="btn-square ${this._shapeColor}"></p>`;
	// };
}

class Star extends Shape {
	constructor(x, y, shapeColor, borderRadius, btnClass) {
		super(x, y, shapeColor, borderRadius, btnClass);
	}

	// display = function () {
	// 	return `<p style="position: absolute; top: ${this._y - 40}px; left: ${
	// 		this._x - 80
	// 	}px; width: 200px; border-radius:0; height: 200px;" class="btn-star ${this._shapeColor}"></p>`;
	// };
}
