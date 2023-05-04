/*Задание 3.
Напишите функцию, которая создает пустой объект, но без прототипа.*/

function task() {
	return Object.create(null)
}

task()