"use strict";

{
	// 获取dom
	var oInput = document.getElementById("oInput");
	var txtobj = document.getElementById("txt");
	var obj = {};
	// 代理配置
	var handler = {
		get: function get(target, key) {
			return Reflect.get(target, key);
		},
		set: function set(target, key, value) {
			if (key === "text") {
				oInput.value = oInput.value === value ? oInput.value : value;
				txtobj.innerHTML = value;
			}
			return Reflect.set(target, key, value);
		}
	};
	var proxy = new Proxy(obj, handler);
	oInput.addEventListener("keyup", function (e) {
		console.log(e.target.value);
		proxy.text = e.target.value;
	});
	proxy.text = 1112;
}