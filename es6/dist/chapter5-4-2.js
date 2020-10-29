"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* export let a = 11;
export function sayhello(){
	console.log("我是一个函数")
}
export class Person{
	say(){
		console.log("hello~")
	}
} */
var a = 11;
function sayhello() {
	console.log("我是一个函数");
}

var Person = function () {
	function Person() {
		_classCallCheck(this, Person);
	}

	_createClass(Person, [{
		key: "say",
		value: function say() {
			console.log("hello~");
		}
	}]);

	return Person;
}();

exports.default = {
	a: a,
	sayhello: sayhello
};