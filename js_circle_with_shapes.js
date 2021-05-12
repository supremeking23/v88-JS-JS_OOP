class Shape {
	constructor(y, x, shapeColor) {
		this._y = y;
		this._x = x;
		this._shapeColor = shapeColor;
	}

	generateRandomRadius = function (min, max) {
		return Math.abs(Math.floor(Math.random() * (min - max) + min));
	};

	display = function () {
		console.log("sd");
		return `<p style="position: absolute; top: ${this._y - 40}px; left: ${
			this._x - 80
		}px; width: 200px; height: 200px; border-radius:50%; background-color: ${this._shapeColor}" class=""></p>`;
	};
}

class Circles extends Shape {
	constructor(x, y, shapeColor) {
		super(x, y, shapeColor);
	}

	display = function () {
		console.log("sd");
		return `<p style="position: absolute; top: ${this._y - 40}px; left: ${
			this._x - 80
		}px; width: 200px; border-radius:50%; height: 200px; background-color: ${this._shapeColor}" class="btn-circle"></p>`;
	};
}

class Square extends Shape {
	constructor(x, y, shapeColor) {
		super(x, y, shapeColor);
	}

	display = function () {
		console.log("sd");
		return `<p style="position: absolute; top: ${this._y - 40}px; left: ${this._x - 80}px; width: 200px; height: 200px;  background-color: ${
			this._shapeColor
		}" class="btn-square"></p>`;
	};
}

class Star extends Shape {
	constructor(x, y, shapeColor) {
		super(x, y, shapeColor);
	}

	display = function () {
		console.log("sd");
		return `<p style="position: absolute; top: ${this._y - 40}px; left: ${this._x - 80}px; width: 200px; height: 200px;  background-color: ${
			this._shapeColor
		}" class="btn-star"></p>`;
	};
}
