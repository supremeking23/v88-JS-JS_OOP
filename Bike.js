// ES5 with prototype

// function Bike(name, price, max_speed) {
// 	this._name = name;
// 	this._price = price;
// 	this._max_speed = max_speed;
// 	this._miles = 0;

// 	Bike.prototype.displayInfo = function () {
// 		console.log("====");
// 		console.log(`Bike name: ${this._name}\nprice:$${this._price}\nmax speed: ${this._max_speed}kph\nMiles driven: ${this._miles}`);
// 		console.log("\n\n");
// 	};

// 	Bike.prototype.drive = function () {
// 		console.log("Driving");
// 		this._miles = this._miles + 10;
// 		return this;
// 	};

// 	Bike.prototype.reverse = function () {
// 		console.log("Reversing");
// 		if (this._miles !== 0) {
// 			this._miles = this._miles - 5;
// 		}
// 		return this;
// 	};
// }

// let bikeOne = new Bike("BikeOne", 4000, 10);
// bikeOne.drive().drive().drive().reverse().displayInfo();

// let bikeTwo = new Bike("bikeTwo", 7000, 20);
// bikeTwo.drive().drive().reverse().reverse().displayInfo();
// let bikeThree = new Bike("bikeThree", 10000, 60);
// bikeTwo.reverse().reverse().reverse().displayInfo();

// ES5 without prototype
// function Bike(name, price, max_speed) {
// 	this._name = name;
// 	this._price = price;
// 	this._max_speed = max_speed;
// 	this._miles = 0;

// 	// this or var
// 	this.displayInfo = function () {
// 		console.log("====");
// 		console.log(`Bike name: ${this._name}\nprice:$${this._price}\nmax speed: ${this._max_speed}kph\nMiles driven: ${this._miles}`);
// 		console.log("\n\n");
// 	};

// 	this.drive = function () {
// 		console.log("Driving");
// 		this._miles = this._miles + 10;
// 		return this;
// 	};

// 	this.reverse = function () {
// 		console.log("Reversing");
// 		if (this._miles !== 0) {
// 			this._miles = this._miles - 5;
// 		}
// 		return this;
// 	};
// }

// let bikeOne = new Bike("BikeOne", 4000, 10);
// bikeOne.drive().drive().drive().reverse().displayInfo();

// let bikeTwo = new Bike("bikeTwo", 7000, 20);
// bikeTwo.drive().drive().reverse().reverse().displayInfo();
// let bikeThree = new Bike("bikeThree", 10000, 60);
// bikeTwo.reverse().reverse().reverse().displayInfo();

// USING Class based Es6
class Bike {
	constructor(name, price, max_speed) {
		this._name = name;
		this._price = price;
		this._max_speed = max_speed;
		this._miles = 0;
	}

	displayInfo = function () {
		console.log("====");
		console.log(`Bike name: ${this._name}\nprice:$${this._price}\nmax speed: ${this._max_speed}kph\nMiles driven: ${this._miles}`);
		console.log("\n\n");
	};

	drive = function () {
		console.log("Driving");
		this._miles = this._miles + 10;
		return this;
	};

	reverse = function () {
		console.log("Reversing");
		if (this._miles !== 0) {
			this._miles = this._miles - 5;
		}
		return this;
	};
}

let bikeOne = new Bike("BikeOne", 4000, 10);
bikeOne.drive().drive().drive().reverse().displayInfo();

let bikeTwo = new Bike("bikeTwo", 7000, 20);
bikeTwo.drive().drive().reverse().reverse().displayInfo();
let bikeThree = new Bike("bikeThree", 10000, 60);
bikeTwo.reverse().reverse().reverse().displayInfo();

// https://scotch.io/tutorials/demystifying-es6-classes-and-prototypal-inheritance
