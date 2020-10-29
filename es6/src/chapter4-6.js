// Set与WeakSet
{
	let set=new Set();
	set.add(1);
	console.log(set)
	let setIs=new Set([1,2,3,1,2,3,4,5,3,"1"]);
	setIs.add("a")
	console.log(setIs)
}
{
	let set = new Set();
	// set.add({ "fruit":'apple' });
	// console.log(set)
	let item = {"fruit":'apple'}
	set.add(item)
	console.log(set)
	console.log(set.has(item))//true
}
{
	let set = new Set([1,2,3,4,5]);
	// set.delete(1)
	// console.log(set)
	for (let s of set.entries()) {
		console.log(s)
	}
}
{
	let arr = [1,2,3,4,6,3,2,3,4,6,7,88];
	let unique = new Set(arr);
	let arr2=Array.from(unique);
	console.log(arr2)
}
{
	let obj={};
	let weakset = new WeakSet();
	weakset.add(obj)
	console.log(weakset)
}

/*
{
	今天的案例敲会
	作业:实现Object,Array,Set() Map()增查改删,
	对象 <=> Map()
	数组 <=> Set()
} */ 