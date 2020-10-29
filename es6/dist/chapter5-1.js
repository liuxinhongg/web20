"use strict";

{
	var fun = function fun(x, y) {
		y = y || "world";
		// let x=10;
		// console.log(x);
		console.log(x + y);
		/* 负性:0 undefined null "" false NaN
  正性: */
	};

	fun("hello", "");
}
{
	var _fun = function _fun(x) {
		var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "world";

		console.log(x + y);
	};

	_fun("hello", "123");
}
{
	// rest  ...rest
	var _fun2 = function _fun2() {
		var sum = 0;

		for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
			rest[_key] = arguments[_key];
		}

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = rest[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var s = _step.value;

				sum += s;
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

		console.log(sum);
		// Array.prototype.method.apply(arguments)
	};

	_fun2(1, 2);
	_fun2(1, 2, 3, 4, 5, 6);
}
{
	var _console;

	(_console = console).log.apply(_console, [1, 2, 3, 4]);
}
// 函数的外面返回另一个函数:尾调用
// 提高性能
{
	var step2 = function step2(x) {
		console.log("我是尾调用", x);
	};

	var step1 = function step1(x) {
		return step2(x);
	};

	step1(11);
}