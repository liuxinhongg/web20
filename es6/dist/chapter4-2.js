"use strict";

// 数组的扩展方法及扩展运算符的使用
{
	// 复制数组
	var list = [1, 2, 3, 4, 5];
	var list2 = [].concat(list);
	// console.log(list2);
	list.push(6);
	console.log(list2);
}
{
	// 分割数组
	var _list = [1, 2, "a", "b", "c"];

	var other = _list.slice(2);

	console.log(other);
}
{
	// 将数组转化成参数传递给函数
	var fun = function fun(x, y) {
		return x + y;
	};

	var canshu = [11, 22];
	console.log(fun.apply(undefined, canshu));
}
{
	// fill 替换数组（全部替换）
	var _list2 = [1, 2, 3, 4, 5];
	// let list2 = [...list].fill(3);
	// console.log(list2)
	var list3 = [].concat(_list2).fill(3, 1, 4);
	console.log(list3);
	// fill(替换的内容,起始下标,替换到那块的长度)
}
{
	// ﬁnd 返回的是数组第一个被找到的，ﬁndIndex 找到的下标
	var _list3 = [{ title: "es6" }, { title: "node", id: 1 }, { title: "wechat" }, { title: "es6", id: 2 }];
	var result = _list3.find(function (item) {
		// console.log(item)
		return item.title === "es6";
	});
	var resultId = _list3.findIndex(function (item) {
		return item.id === 2;
	});
	console.log(resultId);
}
{
	// Includes:返回一个Boolean,
	var arr = [1, 2, 3, 4, 5];
	var _result = arr.includes(6);
	console.log(_result);
}
{
	var _ref;

	// ﬂat 展开数组
	var _list4 = [1, 2, ["2nd", 3, 4]];
	// es5
	var _result2 = (_ref = []).concat.apply(_ref, _list4);
	console.log(_result2); //[1, 2, "2nd", 3, 4]
	var es6result = _list4.flat();
	console.log(es6result);
	var listmore = [1, 2, ["2nd", 3, 4, ["3th", 5, 6, 7]]];
	console.log(listmore.flat(2));
}
{
	// fliter(function（ 每一项的值，下标，数组）{});过滤
	var _arr = [1, 4, 5, 6, 4, 3, 4, 7, 8, 2, 3];
	var _result3 = _arr.filter(function (i, index, item) {
		return item.indexOf(i) === index;
	});
	console.log(_result3);
	var arrother = [1, 2, 3, 4, 5, 6, 7];
	var resultO = arrother.filter(function (item) {
		return item = item > 4;
	});
	console.log(resultO);
}