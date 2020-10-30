"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

{
	// Iterator
	var userIte = function userIte(arr) {
		var index = 0;
		return {
			next: function next() {
				return index < arr.length ? { value: arr[index++], done: false } : { value: undefined, done: true };
			}
		};
	};

	var Ite = userIte(["aa", "bb"]);
	console.log(Ite.next());
	console.log(Ite.next());
	console.log(Ite.next());
	console.log(Ite.next());
	console.log(Ite.next());
	console.log(Ite.next());
}
{
	var obj = _defineProperty({
		name: "马海龙",
		age: 19
	}, Symbol.iterator, function () {
		var index = 0;
		var values = Object.values(this);
		// console.log(values)
		return {
			next: function next() {
				if (index < values.length) {
					return {
						value: values[index++],
						done: false
					};
				} else {
					return {
						value: undefined,
						done: true
					};
				}
			}
		};
	});
	var kk = obj[Symbol.iterator]();
	/* console.log(kk.next())
 console.log(kk.next())
 console.log(kk.next()) 
 for (let s of obj) {
 	console.log(s)
 }*/
}
{
	var arr = [1, 2, 3, 4, 5];
	var fn = arr[Symbol.iterator]();
	console.log(fn.next());
	console.log(fn.next());
	console.log(fn.next());
	console.log(fn.next());
	console.log(fn.next());
	console.log(fn.next());
	console.log(fn.next());
}