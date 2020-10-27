// 解构赋值
{
	let a,b;
	[a,b]=[11,22];
	console.log(a,b);
}
{
	let a,b,c;
	[a,b,c]=[11,22];
	console.log(a,b,c);//11,22,undefined
}
{
	let a,b,c;
	[a,b,c=33]=[11,22,44];
	console.log(a,b,c)
}
{
	// es6拓展运算符...(spread)
	let a,other;
	[a,...other]=[1,2,3,4,54,6,7,8];
	console.log(a,other)
}
{
	let a,b;
	[a,,b]=[1,2,3];
	console.log(a,b);
}
{
	let a,b;
	({a,b}={a:2,b:3})
	console.log(a,b);
}
{
	let num,other;
	({a:num,b:other} = {a:22,b:33})
	console.log(num,other)
}
{
	function fn(){
		return {
			name:"web20",
			nameList:[
				{
					name:"zhangsan"
				}
			]
		}
	}
	let b=fn();
	let { name:person,nameList:[{name:otherperson}]} =b;
	console.log(person,otherperson);//web20,zhangsan
}