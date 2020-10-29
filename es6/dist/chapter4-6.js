"use strict";

// Set与WeakSet
{
	var set = new Set();
	set.add(1);
	console.log(set);
	var setIs = new Set([1, 2, 3, 1, 2, 3, 4, 5, 3, "1"]);
	setIs.add("a");
	console.log(setIs);
}
{
	var _set = new Set();
	// set.add({ "fruit":'apple' });
	// console.log(set)
	var item = { "fruit": 'apple' };
	_set.add(item);
	console.log(_set);
	console.log(_set.has(item)); //true
}
{
	var _set2 = new Set([1, 2, 3, 4, 5]);
	// set.delete(1)
	// console.log(set)
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = _set2.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var s = _step.value;

			console.log(s);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
}
{
	var arr = [1, 2, 3, 4, 6, 3, 2, 3, 4, 6, 7, 88];
	var unique = new Set(arr);
	var arr2 = Array.from(unique);
	console.log(arr2);
}
{
	var obj = {};
	var weakset = new WeakSet();
	weakset.add(obj);
	console.log(weakset);
}

/*
{
	今天的案例敲会
	作业:实现Object,Array,Set() Map()增查改删,
	对象 <=> Map()
	数组 <=> Set()
} */