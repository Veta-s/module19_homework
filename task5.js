/*Задание 5.
Перепишите консольное приложение из предыдущего юнита на классы.*/

class Device {
	constructor(name, weight, colour, capacity) {
		this.name = name;
		this.plug = 'euro';
		this.weight = weight;
		this.colour = colour;
		this.capacity = capacity;
	};
	getPowerOn = function (connect) {
		if (this.connect === 'off') { this.connect = 'on' }
	};
	getPowerOff = function (connect) {
		if (this.connect === 'on') { this.connect = 'off' }
	};
}

class Lamp extends Device {
	constructor(name, weight, colour, capacity, light) {
		super(name);
		this.weight = weight;
		this.colour = colour;
		this.capacity = capacity;
		this.light = light;
	};
	nightLight = function () {
		console.log(`I have a night light function`)
	};
}

class Laptop extends Device { 
	constructor(name, weight, colour, capacity, brand) {
		super(name);
		this.weight = weight;
		this.colour = colour;
		this.capacity = capacity;
		this.brand = brand;
	};
	cost = function (cost) {
		console.log(`My cost is ${cost} RMB`)
	};
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