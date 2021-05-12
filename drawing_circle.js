// ES5 with prototypes
// function Shape(y, x, shapeColor) {
// 	this._y = y;
// 	this._x = x;
// 	this._shapeColor = shapeColor;

// 	Shape.prototype.generateRandomRadius = function (min, max) {
// 		return Math.abs(Math.floor(Math.random() * (min - max) + min));
// 	};

// 	Shape.prototype.display = function () {
// 		console.log("sd");
// 		return `<p style="position: absolute; top: ${this._y - 40}px; left: ${
// 			this._x - 80
// 		}px; width: 200px; height: 200px; border-radius:${this.generateRandomRadius(10, 200)}px; background-color: ${this._shapeColor}"></p>`;
// 	};
// }

// ES5 without prototypes
// function Shape(y, x, shapeColor) {
// 	this._y = y;
// 	this._x = x;
// 	this._shapeColor = shapeColor;

// 	this.generateRandomRadius = function (min, max) {
// 		return Math.abs(Math.floor(Math.random() * (min - max) + min));
// 	};

// 	this.display = function () {
// 		console.log("sd");
// 		return `<p style="position: absolute; top: ${this._y - 40}px; left: ${
// 			this._x - 80
// 		}px; width: 200px; height: 200px; border-radius:${this.generateRandomRadius(10, 200)}px; background-color: ${this._shapeColor}"></p>`;
// 	};
// }

// es6
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
		}px; width: 200px; height: 200px; border-radius:${this.generateRandomRadius(10, 200)}px; background-color: ${this._shapeColor}"></p>`;
	};
}

document.addEventListener("DOMContentLoaded", function (event) {
	let buttons = document.querySelectorAll("button");
	let canvas = document.querySelector(".canvas");
	let shapeColor = "#cce8cc";

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", function () {
			if (buttons[i].classList.contains("lightgreen")) {
				shapeColor = "#cce8cc";
			} else if (buttons[i].classList.contains("lightblue")) {
				shapeColor = "lightblue";
			} else if (buttons[i].classList.contains("lightviolet")) {
				shapeColor = "#e5ccff";
			} else if (buttons[i].classList.contains("reset")) {
				shapeColor = "#cce8cc";
				canvas.innerHTML = "";
			}
		});
	}

	canvas.addEventListener("click", function (e) {
		let shape = new Shape(e.clientY, e.clientX, shapeColor);
		canvas.innerHTML += shape.display();
	});

	function shrink() {
		let shapes = document.querySelectorAll("p");
		for (let i = 0; i < shapes.length; i++) {
			let previousRadius = shapes[i].style.borderRadius;
			let newRadius = parseInt(previousRadius) + 10;
			shapes[i].style.borderRadius = `${newRadius}px`;

			shapes[i].style.height = `${parseInt(shapes[i].style.height) - 10}px`;
			shapes[i].style.width = `${parseInt(shapes[i].style.width) - 10}px`;
			if (parseInt(shapes[i].style.height) === 0 && parseInt(shapes[i].style.width) === 0) {
				shapes[i].remove();
			}
		}
	}

	setInterval(() => {
		// console.log("hi");
		shrink();
	}, 1000);
});
