{
	function fun(x,y){
		y = y || "world"
		// let x=10;
		// console.log(x);
		console.log(x+y);
		/* 负性:0 undefined null "" false NaN
		正性: */
	}
	fun("hello","");
	
}
{
	function fun(x,y="world"){
		console.log(x+y);
	}
	fun("hello","123")
}
{
	// rest  ...rest
	function fun(...rest){
		let sum= 0;
		for (let s of rest) {
			sum+=s;
		}
		console.log(sum)
		// Array.prototype.method.apply(arguments)
	}
	fun(1,2)
	fun(1,2,3,4,5,6)
}
{
	console.log(...[1,2,3,4])
}
// 函数的外面返回另一个函数:尾调用
// 提高性能
{
	function step2(x){
		console.log("我是尾调用",x);
	}
	function step1(x){
		return step2(x)
	}
	step1(11);
}