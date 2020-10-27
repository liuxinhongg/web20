// var i=2;
/* for(let i=1;i<10;i++){
	
}
console.log(i);//造成内存泄漏 */
/* if(true){
	let i=10;
console.log(i)
} */
/* !(function(){
	// let b;
	console.log(b);//暂时性死区
	let b=10;
})() */
{
	let a=10;
	let a=20;
	console.log(a);
}