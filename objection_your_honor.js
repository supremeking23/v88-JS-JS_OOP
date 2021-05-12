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
	prosecute(defendant, case_detail) {
		defendant.case_title = case_detail.title;
		let is_convicted = false;
		if (case_detail.ageLimit.minAge < defendant.age && case_detail.ageLimit.maxAge > defendant.age) {
			is_convicted = true;
		} else {
			// console.log("Not Guilty");
			is_convicted = false;
		}
		defendant.is_convicted = is_convicted;
		defendant.release_date = case_detail.computeReleaseDate(new Date());
	}
}

class Defendant extends Person {
	constructor(name, age) {
		super(name, age);
		this._case_title;
		this._is_convicted;
		this.release_date;
	}

	// store in object, case_title and date

	get case_title() {
		return this._case_title;
	}

	set case_title(newCaseTitle) {
		this._case_title = newCaseTitle;
	}

	get is_convicted() {
		return this._is_convicted;
	}

	set is_convicted(value) {
		this._is_convicted = value;
	}

	get release_date() {
		return this._release_date;
	}

	set release_date(value) {
		this._release_date = value;
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

	get ageLimit() {
		return this._ageLimit;
	}

	get title() {
		return this._title;
	}

	set title(setTitle) {
		this._title = setTitle;
	}

	get imprisonmentTerm() {
		return this._imprisonmentTerm;
	}

	computeReleaseDate(startDate) {
		let currentDate = startDate;
		// let dayDifference
		let dateRendered = {
			years: currentDate.getFullYear() + this.imprisonmentTerm.years,
			months: currentDate.getMonth() + this.imprisonmentTerm.months,
			days: currentDate.getDate() + this.imprisonmentTerm.days,
		};
		return dateRendered;
	}
}

class TrialCourt {
	constructor() {}

	getVerdict(defendant) {
		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		if (defendant.is_convicted) {
			console.log(`GUILTY`);
			console.log(`Release Date: ${months[defendant.release_date.months]} ${defendant.release_date.days} ${defendant.release_date.years}`);
		} else {
			console.log(`NOT GUILTY`);
		}
	}

	initiateTrial(defendant, prosecutor) {
		console.log(`Name: ${defendant.name}`);
		console.log(`Age: ${defendant.age} years old`);
		console.log(`Case Title: ${defendant.case_title}`);
		console.log(`is convicted: ${defendant.is_convicted}`);
		console.log(`Filed by: ${prosecutor.name}`);
		this.getVerdict(defendant);
	}
}

let case1 = new Case("Murder", 3, 3, 3, 18, 78);

let prosecutor = new Prosecutor("John", 44);
let defendant1 = new Defendant("George", 23);
prosecutor.prosecute(defendant1, case1);
let trialOne = new TrialCourt();
trialOne.initiateTrial(defendant1, prosecutor);

console.log(`\n\n=========== Defendant 2============`);
let defendant2 = new Defendant("Chris", 7);
prosecutor.prosecute(defendant2, case1);
let trialTwo = new TrialCourt();
trialTwo.initiateTrial(defendant2, prosecutor);

// console.log(`\n\n=========== Case 2============`);
// let case2 = new Case("Malic")
