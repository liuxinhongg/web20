// Symbol() 是一个函数，不是对象，不能用new关键字
{
	let a1=Symbol();
	let a2=Symbol();
	console.log(a1);//let a1=Symbol();
	console.log(a1===a2);//false
}
{
	let a1=Symbol("kk");
	let a2=Symbol("kk");
	console.log(a1);//Symbol(kk)
	console.log(a1===a2);//false
}
// Symbol.for()api
{
	let a1=Symbol.for("kk");
	let a2=Symbol.for("kk");
	// {a1:kk} {a2:kk}
	console.log(a1===a2);//true
}
// 声明对象属性
{
	let a1=Symbol("kk");
	let obj = {
		[a1]:123,
		kk:123,
		a1:123
	}
	console.log(obj)
}
{
	let a1=Symbol("kk");
	let obj={};
	obj[a1]=123
	// obj.a1=123
	console.log(obj)
}
// Object.defineProperty
{
	let a1=Symbol("kk");
	let obj={};
	// {value:123}描述器
	Object.defineProperty(obj,a1,{value:123});
	console.log(obj)
}