{
	let map = new Map();
	map.set([1,2,3],"shuzi");
	console.log(map)
	let mapOther = new Map([
		["name","zs"],["age",19]
	])
	console.log(mapOther)
	console.log(mapOther.size);//4
	// mapOther.set("name","lisi");
	mapOther.set("name","lisi").set("hobby","eating").set("info",["height","weight"]);
	let map2=mapOther.get("hobby");
	console.log(map2)
	console.log(mapOther.has("age"))
	mapOther.delete("info");
	console.log(mapOther);
}
{
	// keys  values  entries
	let map= new Map([
		["name","屈卓欣"],
		["age",18],
		["hobby","playing"]
	])
	// console.log(map.keys())
	for(let key of map.entries()){
		console.log(key)
	}
	for(let key of map){
		console.log(key)
	}
}
// WeakMap
{
	let weakmap=new WeakMap([
		[{"name":"zhangsan"},"qzx"]
	])
	console.log(weakmap)
}