"use strict";

{
	// es5
	var str1 = "a";
	var str2 = "\u20BA0";
	console.log(str2);
	// es6
	var str3 = "\uD842\uDFB7";
	// console.log(str3)
}
{
	var _str = "\uD842\uDFB7";
	// console.log(str3);
	/* for(let i = 0;i<str3.length;i++){
 	console.log(str3[i]);
 } */
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = _str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
	var str = "webwebwbewbewebweb";
	console.log("includes", str.includes("web"));
	console.log("startsWith", str.startsWith("web"));
	console.log("endsWith", str.startsWith("web"));
	var _str2 = "web";
	console.log(_str2.repeat(2));
}
// 字符串补全 第一个参数是补全后的字符串长度，第二个参数是用于补全的  字符串
// padStart(length, str)
// padEnd(length, str)
{
	var _str3 = "web";
	console.log(_str3.padStart(6, "abcd"));
	console.log(_str3.padEnd(6, "abcd"));
}
{
	// 模板字符 `${变量}`
	var name = "zhangsan";
	var age = 18;
	var hobby = "playing";
	var _str4 = "我叫" + name + ",我今年" + age + "岁了,我喜欢" + hobby + ",";
	console.log(_str4);
	var _str5 = "\u6211\u53EB" + name + ",\u6211\u4ECA\u5E74" + age + "\u5C81\u4E86,\u6211\u559C\u6B22" + hobby;
	console.log(_str5);
}