{
	// 增删改查
	let array=[];
	let obj ={};//{fruit:"apple" }
	let set = new Set();
	let map = new Map();
	const gooditem={ fruit:'apple'};
	// 增
	array.push(gooditem);
	obj['fruit']="apple";
	set.add(gooditem);
	map.set("fruit","apple")
	console.log(array,obj,set,map);
	// 查
	let resultArr=array.includes(gooditem);
	let resultObj= "fruit" in obj;
	let resultSet=set.has(gooditem)
	let resultMap=map.has("fruit");
	console.log(resultArr,resultObj,resultSet,resultMap);
	// 修改
	array.forEach(function(item){
		item.fruit = item.fruit ? "orange" :""
	})
	obj["fruit"] = "orange";
	map.set("fruit","orange");
	set.forEach(function(item){
		item.fruit = item.fruit ? "orange" :""
	})
	console.log(array,obj,set,map);
	// 删除
	const index = array.findIndex(function(item){
		return item.fruit;
	})
	array.splice(index,1);
	delete obj.fruit;
	map.delete("fruit");
	set.delete(gooditem);
	console.log(array,obj,set,map);
}
// 类型转换
{
	// 对象<=>Map()
	let obj = {
		name:"zhangsan",
		hobby:"playing"
	}
	console.log(Object.entries(obj)) 
	let map = new Map(Object.entries(obj));
	console.log(map)
	// Object.fromEntries() map转换为对象
	let obj2 = Object.fromEntries(map);
	console.log(obj2)
}

{
	// 数组<=>set()
	let arr = [1,2,3,4,5];
	let set = new Set(arr);
	console.log(set);
	let arr2 = Array.from(set);
	console.log(arr2);
}