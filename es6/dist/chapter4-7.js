'use strict';

{
	// 增删改查
	var array = [];
	var obj = {}; //{fruit:"apple" }
	var set = new Set();
	var map = new Map();
	var gooditem = { fruit: 'apple' };
	// 增
	array.push(gooditem);
	obj['fruit'] = "apple";
	set.add(gooditem);
	map.set("fruit", "apple");
	console.log(array, obj, set, map);
	// 查
	var resultArr = array.includes(gooditem);
	var resultObj = "fruit" in obj;
	var resultSet = set.has(gooditem);
	var resultMap = map.has("fruit");
	console.log(resultArr, resultObj, resultSet, resultMap);
	// 修改
	array.forEach(function (item) {
		item.fruit = item.fruit ? "orange" : "";
	});
	obj["fruit"] = "orange";
	map.set("fruit", "orange");
	set.forEach(function (item) {
		item.fruit = item.fruit ? "orange" : "";
	});
	console.log(array, obj, set, map);
	// 删除
	var index = array.findIndex(function (item) {
		return item.fruit;
	});
	array.splice(index, 1);
	delete obj.fruit;
	map.delete("fruit");
	set.delete(gooditem);
	console.log(array, obj, set, map);
}
// 类型转换
{
	// 对象<=>Map()
	var _obj = {
		name: "zhangsan",
		hobby: "playing"
	};
	console.log(Object.entries(_obj));
	var _map = new Map(Object.entries(_obj));
	console.log(_map);
	// Object.fromEntries() map转换为对象
	var obj2 = Object.fromEntries(_map);
	console.log(obj2);
}

{
	// 数组<=>set()
	var arr = [1, 2, 3, 4, 5];
	var _set = new Set(arr);
	console.log(_set);
	var arr2 = Array.from(_set);
	console.log(arr2);
}