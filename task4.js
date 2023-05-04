/*Задание 4.
Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность. 
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.*/

function Device (name, weight, colour, capacity) {
	this.name = name,
	this.plug = 'euro',
	this.weight = weight,
	this.colour = colour,
	this.capacity = capacity
}
Device.prototype.getPowerOn = function (connect) {
	if (this.connect === 'off') {this.connect = 'on'}
}
Device.prototype.getPowerOff = function (connect) {
	if (this.connect === 'on') {this.connect = 'off'}
}

function Lamp (name, weight, colour, capacity, light) {
	this.name = name,
	this.weight = weight,
	this.colour = colour,
	this.capacity = capacity,
	this.light = light
}
Lamp.prototype = new Device()
Lamp.prototype.nightLight = function () {
	console.log(`I have a night light function`)
}

function Laptop (name, weight, colour, capacity, brand) {
	this.name = name,
	this.weight = weight,
	this.colour = colour,
	this.capacity = capacity,
	this.brand = brand
}
Laptop.prototype = new Device()
Laptop.prototype.cost = function (cost) {
	console.log(`My cost is ${cost} RMB`)
}



const lampSunny = new Lamp('Sunny', 100, 'grey', 10, 'warm');
const lampMoon = new Lamp('Moon', 120, 'white', 10, 'cold');
const laptopWind = new Laptop('WindowsPC', 1300, 'white', 40, 'MSI');
const laptopApple = new Laptop('Mac', 900, 'silver', 40, 'Apple');
console.log(lampSunny);
console.log(lampMoon);
lampMoon.nightLight();
console.log(laptopWind);
laptopWind.cost(4350);
console.log(laptopApple);

