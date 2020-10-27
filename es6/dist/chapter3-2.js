"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Symbol() 是一个函数，不是对象，不能用new关键字
{
	var a1 = Symbol();
	var a2 = Symbol();
	console.log(a1); //let a1=Symbol();
	console.log(a1 === a2); //false
}
{
	var _a = Symbol("kk");
	var _a2 = Symbol("kk");
	console.log(_a); //Symbol(kk)
	console.log(_a === _a2); //false
}
// Symbol.for()api
{
	var _a3 = Symbol.for("kk");
	var _a4 = Symbol.for("kk");
	// {a1:kk} {a2:kk}
	console.log(_a3 === _a4); //true
}
// 声明对象属性
{
	var _obj;

	var _a5 = Symbol("kk");
	var obj = (_obj = {}, _defineProperty(_obj, _a5, 123), _defineProperty(_obj, "kk", 123), _defineProperty(_obj, "a1", 123), _obj);
	console.log(obj);
}
{
	var _a6 = Symbol("kk");
	var _obj2 = {};
	_obj2[_a6] = 123;
	// obj.a1=123
	console.log(_obj2);
}
// Object.defineProperty
{
	var _a7 = Symbol("kk");
	var _obj3 = {};
	// {value:123}描述器
	Object.defineProperty(_obj3, _a7, { value: 123 });
	console.log(_obj3);
}