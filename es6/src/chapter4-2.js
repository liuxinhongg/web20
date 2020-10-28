// 数组的扩展方法及扩展运算符的使用
{
	// 复制数组
	const list = [1,2,3,4,5];
	const list2 = [...list];
	// console.log(list2);
	list.push(6);
	console.log(list2)
}
{
	// 分割数组
	const list = [1,2,"a","b","c"];
	let [,,...other]=list;
	console.log(other)
}
{
	// 将数组转化成参数传递给函数
	function fun(x,y){
		return x+y;
	}
	let canshu = [11,22];
	console.log(fun(...canshu))
}
{
	// fill 替换数组（全部替换）
	const list = [1,2,3,4,5];
	// let list2 = [...list].fill(3);
	// console.log(list2)
	let list3 = [...list].fill(3,1,4);
	console.log(list3)
	// fill(替换的内容,起始下标,替换到那块的长度)
}
{
	// ﬁnd 返回的是数组第一个被找到的，ﬁndIndex 找到的下标
	const list = [ {title:"es6"},{ title:"node",id:1 },{title:"wechat"},{title:"es6",id:2}];
	let result = list.find(function(item){
		// console.log(item)
		return item.title === "es6"
	})
	let resultId=list.findIndex(function(item){
		return item.id===2
	})
	console.log(resultId)
}
{
	// Includes:返回一个Boolean,
	const arr = [1,2,3,4,5];
	let result = arr.includes(6);
	console.log(result);
}
{
	// ﬂat 展开数组
	const list = [1,2,["2nd",3,4]];
	// es5
	let result = [].concat(...list);
	console.log(result);//[1, 2, "2nd", 3, 4]
	const es6result = list.flat();
	console.log(es6result)
	const listmore = [1,2,["2nd",3,4,["3th",5,6,7]]];
	console.log(listmore.flat(2));
}
{
	// fliter(function（ 每一项的值，下标，数组）{});过滤
	let arr = [1,4,5,6,4,3,4,7,8,2,3];
	let result = arr.filter(function(i,index,item){
		return item.indexOf(i) === index
	})
	console.log(result);
	let arrother = [1,2,3,4,5,6,7];
	let resultO = arrother.filter(function(item){
		return item=item > 4
	})
	console.log(resultO)
}