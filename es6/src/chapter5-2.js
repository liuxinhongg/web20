{
	// let a=function(x){console.log(x)}
	// let a=(x)=>{console.log(x)}
	let a=x=>{console.log(x)}
	/* let aa=function(x){
		return x+2
	} */
	let aa=x=>x+2;
	console.log(aa(2))
	// a(12)
}
{
	const fruit = {
		name:"apple",
		num:12,
		price:10,
		// sum:function(){}
		sum(){
			/* setTimeout(function(){
				console.log(this)
				// console.log(this.num*this.price);//NaN
			},1000) */
			setTimeout(()=>{
				 console.log(this.num*this.price);
			},1000)
		}
	}
	fruit.sum()
}