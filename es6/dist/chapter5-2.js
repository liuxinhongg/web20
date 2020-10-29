"use strict";

{
	// let a=function(x){console.log(x)}
	// let a=(x)=>{console.log(x)}
	var a = function a(x) {
		console.log(x);
	};
	/* let aa=function(x){
 	return x+2
 } */
	var aa = function aa(x) {
		return x + 2;
	};
	console.log(aa(2));
	// a(12)
}
{
	var fruit = {
		name: "apple",
		num: 12,
		price: 10,
		// sum:function(){}
		sum: function sum() {
			var _this = this;

			/* setTimeout(function(){
   	console.log(this)
   	// console.log(this.num*this.price);//NaN
   },1000) */
			setTimeout(function () {
				console.log(_this.num * _this.price);
			}, 1000);
		}
	};
	fruit.sum();
}