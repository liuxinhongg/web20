/* export let a = 11;
export function sayhello(){
	console.log("我是一个函数")
}
export class Person{
	say(){
		console.log("hello~")
	}
} */
 let a = 11;
 function sayhello(){
	console.log("我是一个函数")
}
 class Person{
	say(){
		console.log("hello~")
	}
}
export default {
	a,
	sayhello
}