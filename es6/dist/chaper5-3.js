"use strict";

{
	var Person = function Person(name, age) {
		this.name = name;
		this.age = age;
	};

	Person.prototype.sayHello = function () {
		console.log("\u6211\u53EB" + this.name + ",\u6211\u4ECA\u5E74" + this.age + "\u5C81\u4E86\uFF0C");
	};
	var Per = new Person("王新杰", 22);
	per.sayHello();
	console.log(Per);
}