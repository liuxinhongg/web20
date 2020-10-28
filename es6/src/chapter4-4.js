/* 安装:cnpm i babel-plugin-transform-object-rest-spread
在babelrc里面配置:"plugins":["transform-object-rest-spread"] 
重启项目
*/
/*{
	let obj = { name:"zhangsan",hobby:"playing" };
	// let objtwo = {...obj}
	// console.log(objtwo)
	let objmrz = {...obj,name:"lisi"}
	console.log(objmrz)
}
{
	let obj={ name:"zhangsan",hobby:"playing" };
	let obj2={age:18}
	let result = {...obj,...obj2}
	console.log(result)
}
 {
	// es5:
	let name="zhangsan";
	let age=18;
	let es5obj={
		name:name,
		age:age,
		sayHello:function(){
			console.log("我是es5的写法")
		}
	}
	// function aa(){}
	// aa(){}
	let es6obj={
		name,
		age,
		sayHello(){
			console.log("我是es6的写法")
		}
	}
	// es5obj.sayHello();
	// es6obj.sayHello()
} */
{
	let key="name";
	let es5obj={};
	// es5obj.name="小明"
	es5obj[key]="小明";
	console.log(es5obj);
	let es6obj={
		[key]:'小花'
	}
	console.log(es6obj)
	
}
{
	// Object.is 判断值是否相等 全等
	console.log(NaN===NaN);//false
	let bj=Object.is(NaN,NaN);
	let bjone=Object.is(1,"1");
	console.log(bj)//true
	console.log(bjone)//true
	// Object.assign(目标对象,来源对象)值复制
	const person = { name:"郭帅",age:19,info:{height:180} };
	let otherPerson={};
	Object.assign(otherPerson,person);
	// console.log(otherPerson)
	person.info.height=150;
	console.log(otherPerson)
}
{
	// Array.from()类数组转换为数组
	let msg="hello";
	const newMsg = Array.from(msg);
	console.log(newMsg)
}
{
	// Object.keys 
	// Object.values 
	// Object.entries
	const person = { name:"李小璐",age:19,height:180};
	let obj={};
	// console.log(Object.keys(person))// ["name", "age", "height"]
	/* for (let key of Object.keys(person)) {
		console.log(key)
	} */
	/* for (let key of Object.values(person)) {
		console.log(key)
		
	} */
	for (let key of Object.entries(person)) {
		console.log(key)
	}
}