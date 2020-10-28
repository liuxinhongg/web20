"use strict";

{
	var map = new Map();
	map.set([1, 2, 3], "shuzi");
	console.log(map);
	var mapOther = new Map([["name", "zs"], ["age", 19]]);
	console.log(mapOther);
	console.log(mapOther.size); //4
	// mapOther.set("name","lisi");
	mapOther.set("name", "lisi").set("hobby", "eating").set("info", ["height", "weight"]);
	var map2 = mapOther.get("hobby");
	console.log(map2);
	console.log(mapOther.has("age"));
	mapOther.delete("info");
	console.log(mapOther);
}
{
	// keys  values  entries
	var _map = new Map([["name", "屈卓欣"], ["age", 18], ["hobby", "playing"]]);
	// console.log(map.keys())
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = _map.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var key = _step.value;

			console.log(key);
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

	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = _map[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var _key = _step2.value;

			console.log(_key);
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}
}
// WeakMap
{
	var weakmap = new WeakMap([[{ "name": "zhangsan" }, "qzx"]]);
	console.log(weakmap);
}