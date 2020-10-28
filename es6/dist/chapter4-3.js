"use strict";

{
	// map()数据的映射
	var json = [{ title: "es6", status: 0 }, { title: "node", status: 0 }, { title: "wechat", status: 1 }, { title: "vue", status: 0 }];
	var result = json.map(function (item) {
		/* return {
  	name:item.title,
  	statusRe:item.status ? "已上线" :"未上线"
  } */
		/* item.status:item.status ? "已上线" : "未上线";
  return item; */
		var obj = {};
		// Object.assign(target,source)
		Object.assign(obj, item);
		obj.status = item.status ? "已上线" : "未上线";
		return obj;
	});
	console.log("json", json);
	console.log("结果", result);
}
// reduce(function(返回值，currentVal,currentIndex,array){},[]/{})
{
	var str = "webwebwebweb";
	var _result = str.split("").reduce(function (acc, cur) {
		// console.log(acc,cur);
		acc[cur] ? acc[cur]++ : acc[cur] = 1;
		return acc;
	}, {});
	// console.log(result)
	// isArray
	var list = [1, 2, ["2nd", 3, 4, ["3th", 5, 6]], [7, 8]];
	var deeplist = function deeplist(list) {
		return list.reduce(function (acc, cur) {
			// acc:返回值,cur:当前值,
			return acc.concat(Array.isArray(cur) ? deeplist(cur) : cur);
		}, []);
	};
	var resultList = deeplist(list);
	console.log(resultList);
}