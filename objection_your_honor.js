// ES6
//https://coryrylan.com/blog/javascript-es6-class-syntax#:~:text=ES6%20classes%20brings%20a%20new,syntax%20that%20ES6%20brings%20us.

class Person {
	constructor(name, age) {
		this._name = name;
		this._age = age;
	}
	// property
	get name() {
		return this._name;
	}
	set name(newName) {
		this._name = newName;
	}

	get age() {
		return this._age;
	}

	set age(newAge) {
		this._age = newAge;
	}
}

class Prosecutor extends Person {
	constructor(name, age) {
		super(name, age);
	}

	// set a case
	prosecute(defendant, case_title) {
		// console.log(`set case`);
		// console.log(`defendant: ${defendant.name}, case: ${case_title.title}`);
		defendant.case_title = case_title.title;
	}
}

class Defendant extends Person {
	constructor(name, age, case_title) {
		super(name, age);
		this._case_title = case_title;
	}

	// store in object, case_title and date

	get case_title() {
		return this._case_title;
	}

	set case_title(newCaseTitle) {
		this._case_title = newCaseTitle;
	}
}

class Case {
	constructor(title, years, months, days, minAge, maxAge) {
		this._title = title;
		this._imprisonmentTerm = {
			years: years,
			months: months,
			days: days,
		};

		this._ageLimit = {
			minAge: minAge,
			maxAge: maxAge,
		};
	}

	get title() {
		return this._title;
	}

	set title(setTitle) {
		this._title = setTitle;
	}

	computeReleaseDate(startDate) {
		// let currentDate = new Date();
		// let dayDifference
	}
}

class TrialCourt {
	constructor() {
		this._verdict;
	}

	get verdict() {
		return this._verdict;
	}

	set verdict(newVerdict) {
		this._verdict = newVerdict;
	}

	getVerdict() {
		const VERDICT_DICISION = ["GUILTY", "NOT GUILTY"];
		return VERDICT_DICISION[Math.floor(Math.random() * VERDICT_DICISION.length)];
	}

	initiateTrial(defendant, prosecutor) {
		this.verdict = this.getVerdict();
		console.log(`Name: ${defendant.name}`);
		console.log(`Age: ${defendant.age} years old`);
		console.log(`Case Title: ${defendant.case_title}`);
		console.log(`Filed by: ${prosecutor.name}`);
		console.log(`Verdict: ${this._verdict}`);
		if (this.verdict === "GUILTY") {
			console.log(`Release Date: ${new Date().getFullYear() + 3}, ${new Date().getMonth() + 3} , ${new Date().getDay() + 3} `);
		}
	}
}

let case1 = new Case("Murder", 3, 3, 3, 18, 78);
let prosecutor = new Prosecutor("John", 44);
let defendant1 = new Defendant("George", 23);
prosecutor.prosecute(defendant1, case1);
// TrialCourt.initiateTrial(defendant1, prosecutor);

trialOne = new TrialCourt();

trialOne.initiateTrial(defendant1, prosecutor);
// console.log(defendant1.name);
