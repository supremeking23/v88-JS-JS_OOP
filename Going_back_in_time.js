//ES5 with prototype
// function Desk(name) {
// 	this._name = name;
// 	this._x = 0;
// 	this._y = 0;
// 	this._color = "black";

// 	Desk.prototype.mov = function (x, y) {
// 		this._x = x;
// 		this._y = y;
// 	};

// 	Desk.prototype.updateColor = function (new_color) {
// 		this._color = new_color;
// 	};

// 	Desk.prototype.displayInfo = function () {
// 		console.log(`name ${this._name} , color ${this._color}`);
// 	};
// }

// let deskOne = new Desk("asd");
// deskOne.displayInfo();
// deskOne.updateColor("red");
// deskOne.displayInfo();

//ES5 with out prototype
// function Desk(name) {
// 	this._name = name;
// 	this._x = 0;
// 	this._y = 0;
// 	this._color = "black";

// 	this.mov = function (x, y) {
// 		this._x = x;
// 		this._y = y;
// 	};

// 	this.updateColor = function (new_color) {
// 		this._color = new_color;
// 	};

// 	this.displayInfo = function () {
// 		console.log(`name ${this._name} , color ${this._color}`);
// 	};
// }

// let deskOne = new Desk("asd");
// deskOne.displayInfo();
// deskOne.updateColor("red");
// deskOne.displayInfo();

// Es6
class Desk {
	constructor(name) {
		this._name = name;
		this._x = 0;
		this._y = 0;
		this._color = "black";
	}

	mov = function (x, y) {
		this._x = x;
		this._y = y;
	};

	updateColor = function (new_color) {
		this._color = new_color;
	};

	displayInfo = function () {
		console.log(`name ${this._name} , color ${this._color}`);
	};
}

let deskOne = new Desk("asd");
deskOne.displayInfo();
deskOne.updateColor("red");
deskOne.displayInfo();
