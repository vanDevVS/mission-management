
var heroArr = [];
var villainArr = [];

var Character = function(name, aliases, id, birthplace, image, intelligence, speed, strength, power) {
	this.name = name;
	this.aliases = aliases;
	this.id = id;
	this.birthplace = birthplace;
	this.image = image;
	this.intelligence = intelligence;
	this.speed = speed;
	this.strength = strength;
	this.power = power;
};

// Heros
var wonderWoman = new Character('Wonder Woman', 'Princess Diana of Themyscira', '720', 'Themyscira', 'images/hero-0.jpg', 80, 100, 100, 100);
var batman = new Character('Batman', 'Bruce Wayne', '106', 'Gotham City', 'images/hero-1.jpg', 81, 29, 40, 63);
var blackPanther = new Character('Black Panther', 'T\'Challa', '69', 'Wakanda', 'images/hero-2.jpg', 85, 90,88, 75);
var harryPotter = new Character('Harry Potter', 'Potter', '310', 'Godrick\'s Hollow', 'images/hero-3.jpg', 95, 30, 40, 90);

heroArr.push(wonderWoman);
heroArr.push(batman);
heroArr.push(blackPanther);
heroArr.push(harryPotter);

// Villains
var bane = new Character('Bane', '', '60', 'Santa Prisca', 'images/villan-0.jpg', 95, 40, 100, 100);
var harley = new Character('Harley Quinn', 'Harleen Frances Quinzel', '309', 'Gotham City', 'images/villan-1.jpg', 95, 40, 60, 60);
var joker = new Character('Joker', 'Jack Napier', '370', 'Gotham City', 'images/villan-2.jpg', 100, 30, 60, 80);
var thanos = new Character('Thanos', 'The Mad Titan', '655', 'Titan', 'images/villan-4.jpg', 95, 30, 100, 90);

villainArr.push(bane);
villainArr.push(harley);
villainArr.push(joker);
villainArr.push(thanos);
console.log(villainArr);

var DOMsearch = {
	heroImg: '.search__hero-image',
	heroName: '.search__hero-stats .search__name',
	heroId: '.search__hero-stats .search__id',
	heroStrength: '.search__hero-stats .search__strength',
	heroInput: '.search__hero-input',
	heroBtn: '.search__hero-btn',
	heroStatsBtn: '.search__hero-stats-btn',
	villainImg: '.search__villain-image',
	villainName: '.search__villain-stats .search__name',
	villainId: '.search__villain-stats .search__id',
	villainStrength: '.search__villain-stats .search__strength',
	villainInput: '.search__villain-input',
	villainBtn: '.search__villan-btn',
	villainStatsBtn: '.search__villan-stats-btn',

};

var DOMstats = {
	heroImg: '.compare__hero-image',
	heroName: '.compare__hero-stats .compare__name',
	heroId: '.compare__hero-stats .compare__id',
	heroAlias: '.compare__hero-stats .compare__alias',
	heroStrength: '.compare__hero-stats .compare__strength',
	heroBirth: '.compare__hero-stats .compare__birth-place',
	heroIntel: '.compare__hero-stats .compare__intel',
	heroSpeed: '.compare__hero-stats .compare__speed',
	heroPower: '.compare__hero-stats .compare__power',
	villainImg: '.compare__villain-image',
	villainName: '.compare__villain-stats .compare__name',
	villainId: '.compare__villain-stats .compare__id',
	villainAlias: '.compare__villain-stats .compare__alias',
	villainStrength: '.compare__villain-stats .compare__strength',
	villainBirth: '.compare__villain-stats .compare__birth-place',
	villainIntel: '.compare__villain-stats .compare__intel',
	villainSpeed: '.compare__villain-stats .compare__speed',
	villainPower: '.compare__villain-stats .compare__power'
};

// document.querySelector(DOMsearch.heroImg).src = 'images/hero-0.jpg';
function findHero() {

	var newInput = document.querySelector(DOMsearch.heroInput).value;
	
	for (var i = 0; i < heroArr.length; i++) {
		if (newInput === heroArr[i].name || newInput === heroArr[i].aliases || newInput === heroArr[i].id) {
			document.querySelector(DOMsearch.heroImg).src = heroArr[i].image;
			document.querySelector(DOMsearch.heroName).innerHTML = heroArr[i].name;
			document.querySelector(DOMsearch.heroId).innerHTML = heroArr[i].id;
			document.querySelector(DOMsearch.heroStrength).innerHTML = heroArr[i].strength;
		} 
	}
	clearHeroFields();
}
function findVillain() {

	var newInput = document.querySelector(DOMsearch.villainInput).value;
	
	for (var i = 0; i < villainArr.length; i++) {
		if (newInput === villainArr[i].name || newInput === villainArr[i].aliases || newInput === villainArr[i].id) {
			document.querySelector(DOMsearch.villainImg).src = villainArr[i].image;
			document.querySelector(DOMsearch.villainName).innerHTML = villainArr[i].name;
			document.querySelector(DOMsearch.villainId).innerHTML = villainArr[i].id;
			document.querySelector(DOMsearch.villainStrength).innerHTML = villainArr[i].strength;
		} 
	}
	clearVillainFields();
}

function displayHeroStats() {
	var newInput = document.querySelector(DOMsearch.heroInput).value;
	
	for (var i = 0; i < heroArr.length; i++) {
		if (newInput === heroArr[i].name || newInput === heroArr[i].aliases || newInput === heroArr[i].id) {
			document.querySelector(DOMstats.heroImg).src = heroArr[i].image;
			document.querySelector(DOMstats.heroName).innerHTML = heroArr[i].name;
			document.querySelector(DOMstats.heroAlias).innerHTML = heroArr[i].aliases;
			document.querySelector(DOMstats.heroId).innerHTML = heroArr[i].id;
			document.querySelector(DOMstats.heroBirth).innerHTML = heroArr[i].birthplace;
			document.querySelector(DOMstats.heroStrength).innerHTML = heroArr[i].strength;
			document.querySelector(DOMstats.heroIntel).innerHTML = heroArr[i].intelligence;
			document.querySelector(DOMstats.heroSpeed).innerHTML = heroArr[i].speed;
			document.querySelector(DOMstats.heroPower).innerHTML = heroArr[i].power;
		} 
	}
}
function displayVillainStats() {
	var newInput = document.querySelector(DOMsearch.villainInput).value;
	
	for (var i = 0; i < villainArr.length; i++) {
		if (newInput === villainArr[i].name || newInput === villainArr[i].aliases || newInput === villainArr[i].id) {
			document.querySelector(DOMstats.villainImg).src = villainArr[i].image;
			document.querySelector(DOMstats.villainName).innerHTML = villainArr[i].name;
			document.querySelector(DOMstats.villainAlias).innerHTML = villainArr[i].aliases;
			document.querySelector(DOMstats.villainId).innerHTML = villainArr[i].id;
			document.querySelector(DOMstats.villainBirth).innerHTML = villainArr[i].birthplace;
			document.querySelector(DOMstats.villainStrength).innerHTML = villainArr[i].strength;
			document.querySelector(DOMstats.villainIntel).innerHTML = villainArr[i].intelligence;
			document.querySelector(DOMstats.villainSpeed).innerHTML = villainArr[i].speed;
			document.querySelector(DOMstats.villainPower).innerHTML = villainArr[i].power;
		} 
	}
}

function clearHeroFields() {
	document.querySelector(DOMstats.heroImg).src = 'images/hero-placeholder.jpg';
	document.querySelector(DOMstats.heroName).innerHTML = '';
	document.querySelector(DOMstats.heroAlias).innerHTML = '';
	document.querySelector(DOMstats.heroId).innerHTML = '';
	document.querySelector(DOMstats.heroBirth).innerHTML = '';
	document.querySelector(DOMstats.heroStrength).innerHTML = '';
	document.querySelector(DOMstats.heroIntel).innerHTML = '';
	document.querySelector(DOMstats.heroSpeed).innerHTML = '';
	document.querySelector(DOMstats.heroPower).innerHTML = '';
}

function clearVillainFields() {
	document.querySelector(DOMstats.villainImg).src = 'images/hero-placeholder.jpg';
	document.querySelector(DOMstats.villainName).innerHTML = '';
	document.querySelector(DOMstats.villainAlias).innerHTML = '';
	document.querySelector(DOMstats.villainId).innerHTML = '';
	document.querySelector(DOMstats.villainBirth).innerHTML = '';
	document.querySelector(DOMstats.villainStrength).innerHTML = '';
	document.querySelector(DOMstats.villainIntel).innerHTML = '';
	document.querySelector(DOMstats.villainSpeed).innerHTML = '';
	document.querySelector(DOMstats.villainPower).innerHTML = '';
}

document.querySelector(DOMsearch.heroBtn).addEventListener('click', findHero);
document.querySelector(DOMsearch.heroStatsBtn).addEventListener('click', displayHeroStats);
document.querySelector(DOMsearch.villainBtn).addEventListener('click', findVillain);
document.querySelector(DOMsearch.villainStatsBtn).addEventListener('click', displayVillainStats);

document.querySelector('.search__tab-hero').addEventListener('click', function() {

	var heroProfile = document.querySelector('.search__heros-container .search__profile');
	var villainProfile = document.querySelector('.search__villains-container .search__profile');

	console.log('hero tab clicked');

	if (heroProfile.classList.contains('hide-content')) {
		heroProfile.classList.remove('hide-content');
		heroProfile.classList.add('show-content');
	}
		villainProfile.classList.add('hide-content');
		villainProfile.classList.remove('show-content');
});

document.querySelector('.search__tab-villain').addEventListener('click', function() {

	var heroProfile = document.querySelector('.search__heros-container .search__profile');
	var villainProfile = document.querySelector('.search__villains-container .search__profile');

	console.log('villain tab clicked');

	if (villainProfile.classList.contains('hide-content')) {
		villainProfile.classList.remove('hide-content');
		villainProfile.classList.add('show-content');
	}
		heroProfile.classList.add('hide-content');
		heroProfile.classList.remove('show-content');
});

/*
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 & this.status == 200) {
		var response = xhttp.responseText;
		console.log("ok" + response);
	}
};
xhttp.open("GET", "http://superheroapi.com/api/10157686424654409", true);
xhttp.send(); */

























































































































































