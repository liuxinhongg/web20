{
	// Iterator
	function userIte(arr){
		let index=0;
		return {
			next(){
				return index<arr.length ? { value:arr[index++] ,done:false} : {value:undefined,done:true }
			}
		}
	}
	let Ite = userIte(["aa","bb"]);
	console.log(Ite.next());
	console.log(Ite.next());
	console.log(Ite.next());
	console.log(Ite.next());
	console.log(Ite.next());
	console.log(Ite.next());
}
{
	const obj = {
		name:"马海龙",
		age:19,
		[Symbol.iterator](){
			let index = 0;
			let values = Object.values(this);
			// console.log(values)
			return {
				next(){
					if(index < values.length){
						return {
							value : values[index++],
							done:false
						}
					}else{
						return {
							value:undefined,
							done:true
						}
					}
				}
			}
		}
	}
	let kk = obj[Symbol.iterator]();
	/* console.log(kk.next())
	console.log(kk.next())
	console.log(kk.next()) 
	for (let s of obj) {
		console.log(s)
	}*/
}
{
	const arr = [1,2,3,4,5];
	const fn = arr[Symbol.iterator]();
	console.log(fn.next())
	console.log(fn.next())
	console.log(fn.next())
	console.log(fn.next())
	console.log(fn.next())
	console.log(fn.next())
	console.log(fn.next())
}