{
	// 获取dom
	let oInput=document.getElementById("oInput");
	let txtobj=document.getElementById("txt");
	let obj = {};
	// 代理配置
	const handler={
		get(target,key){
			return Reflect.get(target,key)
		},
		set(target,key,value){
			if(key==="text"){
				oInput.value = oInput.value === value ? oInput.value : value
				txtobj.innerHTML=value
			}
			return Reflect.set(target,key,value);
		}
	}
	let proxy = new Proxy(obj,handler);
	oInput.addEventListener("keyup",function(e){
		console.log(e.target.value)
		proxy.text=e.target.value;
	})
	proxy.text=1112
}