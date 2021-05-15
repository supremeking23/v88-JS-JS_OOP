// ES5 with prototype
// function Circle(selector) {
// 	// this._selector = selector;
// 	this._selector = selector;

// 	Circle.prototype.generateRandomRadius = function (min, max) {
// 		return Math.abs(Math.floor(Math.random() * (min - max) + min));
// 	};

// 	Circle.prototype.generateRandomXCoordiate = function (min, max) {
// 		return Math.abs(Math.floor(Math.random() * (min - max) + min));
// 	};

// 	Circle.prototype.generateRandomYCoordiate = function (min, max) {
// 		return Math.abs(Math.floor(Math.random() * (min - max) + min));
// 	};

// 	Circle.prototype.generateRandomColor = function () {
// 		const COLORS = ["#cce8cc", "#f55c47", "#cc9b6d", "#21094e"];
// 		return COLORS[Math.floor(Math.random() * COLORS.length - 1)];
// 	};

// 	Circle.prototype.getElement = function (selector) {
// 		return document.querySelector(selector);
// 	};

// 	Circle.prototype.draw_circle = function (number_of_cirle) {
// 		let html = ``;
// 		for (let i = 0; i < number_of_cirle; i++) {
// 			html += `<p style="position: absolute; top: ${this.generateRandomXCoordiate(1, 600) - 40}px; left: ${
// 				this.generateRandomYCoordiate(1, 1300) - 80
// 			}px; width: 200px; height: 200px; border-radius:${this.generateRandomRadius(
// 				10,
// 				200
// 			)}px; background-color: ${this.generateRandomColor()}"></p>`;
// 		}

// 		// return html;
// 		this.getElement(this._selector).innerHTML = html;
// 	};
// }

// ES5 with no prototype

// function Circle(selector) {
// 	// this._selector = selector;
// 	this._selector = selector;

// 	this.generateRandomRadius = function (min, max) {
// 		return Math.abs(Math.floor(Math.random() * (min - max) + min));
// 	};

// 	this.generateRandomXCoordiate = function (min, max) {
// 		return Math.abs(Math.floor(Math.random() * (min - max) + min));
// 	};

// 	this.generateRandomYCoordiate = function (min, max) {
// 		return Math.abs(Math.floor(Math.random() * (min - max) + min));
// 	};

// 	this.generateRandomColor = function () {
// 		const COLORS = ["#cce8cc", "#f55c47", "#cc9b6d", "#21094e"];
// 		return COLORS[Math.floor(Math.random() * COLORS.length - 1)];
// 	};

// 	this.getElement = function (selector) {
// 		return document.querySelector(selector);
// 	};

// 	this.draw_circle = function (number_of_cirle) {
// 		let html = ``;
// 		for (let i = 0; i < number_of_cirle; i++) {
// 			html += `<p style="position: absolute; top: ${this.generateRandomXCoordiate(1, 600) - 40}px; left: ${
// 				this.generateRandomYCoordiate(1, 1300) - 80
// 			}px; width: 200px; height: 200px; border-radius:${this.generateRandomRadius(
// 				10,
// 				200
// 			)}px; background-color: ${this.generateRandomColor()}"></p>`;
// 		}

// 		// return html;
// 		this.getElement(this._selector).innerHTML = html;
// 	};
// }

// ES6

class Circle {
	constructor(selector) {
		this._selector = selector;
	}

	generateRandomRadius = function (min, max) {
		return Math.abs(Math.floor(Math.random() * (min - max) + min));
	};

	generateRandomXCoordiate = function (min, max) {
		return Math.abs(Math.floor(Math.random() * (min - max) + min));
	};

	generateRandomYCoordiate = function (min, max) {
		return Math.abs(Math.floor(Math.random() * (min - max) + min));
	};

	generateRandomColor = function () {
		const COLORS = ["#cce8cc", "#f55c47", "#cc9b6d", "#21094e"];
		return COLORS[Math.floor(Math.random() * COLORS.length - 1)];
	};

	getElement = function (selector) {
		return document.querySelector(selector);
	};

	draw_circle = function (number_of_cirle) {
		let html = ``;
		for (let i = 0; i < number_of_cirle; i++) {
			// html += `<p style="position: absolute; top: ${this.generateRandomXCoordiate(1, 600) - 40}px; left: ${
			// 	this.generateRandomYCoordiate(1, 1300) - 80
			// }px; width: 200px; height: 200px; border-radius:${this.generateRandomRadius(
			// 	10,
			// 	200
			// )}px; background-color: ${this.generateRandomColor()}"></p>`;

			html += `<p style="position: absolute; top: ${this.generateRandomXCoordiate(1, 600) - 40}px; left: ${
				this.generateRandomYCoordiate(1, 1300) - 80
			}px; width: 200px; height: 200px; border-radius:50%; background-color: ${this.generateRandomColor()}"></p>`;
		}

		// return html;
		this.getElement(this._selector).innerHTML = html;
	};
}
