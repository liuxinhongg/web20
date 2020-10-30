{
	// 安装：cnpm i -S babel-polyfill
	let say=function *(){
		yield "aa";
		yield "bb";
		yield "cc";
	}
	const fn=say();
	/* console.log(fn.next())
	console.log(fn.next())
	console.log(fn.next())
	console.log(fn.next())
	console.log(fn.next())
	console.log(fn.next()) */
}
{
	let obj = {
		a:1,
		b:2,
		c:3
	}
	obj[Symbol.iterator]=function*(){
		for (let key of Object.keys(obj)) {
			yield obj[key]
		}
	}
	let fn = obj[Symbol.iterator]();
	/* console.log(fn.next());
	console.log(fn.next());
	console.log(fn.next());
	console.log(fn.next());
	for (let s of obj) {
		console.log(s)
	} */
}
{
	const state = function * (){
		while(1){
			yield "success";
			yield "fail";
			yield "pending"
		}
	}
	const StateData=state();
	/* console.log(StateData.next())
	console.log(StateData.next())
	console.log(StateData.next())
	console.log(StateData.next())
	console.log(StateData.next())
	console.log(StateData.next()) */
}
{
	function fn1(){
		return new Promise(resolve=>{
			setTimeout(()=>{
				console.log("订单查询...")
				resolve({code:0})
			},1000)
		})
	}
	const getState = function*(){
		yield fn1();
	}
	function autogetState(){
		const gen = getState();
		const state = gen.next();
		// {code:0}
		// console.log(state)
		state.value.then((res)=>{
			if(res.code===0){
				console.log("付款成功")
			}else{
				console.log("暂未付款");
				setTimeout(()=>autogetState(),1000)
			}
		})
	}
	autogetState();
}