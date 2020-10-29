"use strict";

{
	var obj = {
		id: 123,
		name: "zhangsan",
		phone: "12345657879",
		creat_time: "2019",
		_siyou: 'admin'
	};
	var proxy = new Proxy(obj, {
		get: function get(target, key) {
			switch (key) {
				case "phone":
					return target[key].substring(0, 3) + "****" + target[key].substr(7);
				case "creat_time":
					return target[key].replace("2019", "2020");
				default:
					return target[key];
			}
		},
		set: function set(target, key, value) {
			if (key === "id") {
				return target[key];
			} else {
				return target[key] = value;
			}
		},
		// has:function(target,key){}
		has: function has(target, key) {
			// in
			if (key in target) {
				console.log(target[key]);
				return true;
			} else {
				console.log("没有属性");
				return false;
			}
		},
		deleteProperty: function deleteProperty(target, key) {
			if (key.indexOf("_") === 0) {
				console.warn("私有属性不能删除");
				return false;
			} else {
				delete target[key];
				return false;
			}
		},

		// 过滤id和下划线开头的属性
		ownKeys: function ownKeys(target) {
			return Object.keys(target).filter(function (item) {
				return item !== "id" && item.indexOf("_") !== 0;
			});
		}
	});
	console.log(proxy.phone, proxy.creat_time);
	proxy.id = 111;
	proxy.name = "lisi";
	console.log(proxy.id, proxy.name);
	console.log("name" in proxy);
	console.log("age" in proxy);
	console.log(delete proxy["_siyou"]);
	console.log(Object.keys(proxy));
}
// Reﬂect
{
	var _obj = {
		name: "lzc",
		age: 19,
		sex: "男"
	};
	console.log(Reflect.get(_obj, "name"));
	Reflect.set(_obj, "name", "李飞");
	console.log(_obj.name);
	"name" in _obj;
	Reflect.has(_obj, "name");
}