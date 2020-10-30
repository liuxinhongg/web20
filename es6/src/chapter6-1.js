/* {
	console.log(1);
	setTimeout(function(){
		console.log(2)
	},1000)
	console.log(3)
} */
/* {
	function ajax(cb){
		setTimeout(()=>{
			cb && cb()//判断回调函数存在不存在
		},1000)
	}
	ajax(()=>{
		console.log("任务1")
	})
} */
/* {
	function ajax(cb){
		setTimeout(()=>{
			//判断回调函数存在不存在
			cb && cb(()=>{
				console.log("任务2")
			})
		},1000)
	}
	ajax((cb2)=>{
		console.log("任务1");
		setTimeout(()=>{
			cb2&&cb2()
		},1000)
	})
} */
/* {
	function ajax(){
		return new Promise((resolve, reject)=>{
			// resolve:程序下一步要执行的函数
			// reject:程序出错的函数
			setTimeout(()=>resolve(),1000)
		})
	}
	// then()链式回调
	ajax().then(()=>{
		console.log("任务1")
	})
} */
// event Loop
/* */
{
	function ajax(){
		return new Promise((resolve, reject)=>{
			setTimeout(()=>resolve(),1000)
		})
	}
	ajax().then(()=>{
		console.log("任务1");
		return new Promise((resolve)=>{
			setTimeout(()=>resolve(),1000);
		})
	}).then(()=>{
		console.log("任务2");
	})
} 
{
	function judgeNumber(x){
		return new Promise((resolve, reject)=>{
			if(typeof(x) === "number"){
				resolve(x);
			}else{
				const err = new Error("请输入数字");
				reject(err);
			}
		})
	}
	judgeNumber("2")
		.then(x=>{ console.log(x); })
		.catch(err=>{console.log(err)})
}
{
	const imgUrl1="./image/cat1.jpg";
	const imgUrl2="./image/cat2.jpg";
	const imgUrl3="./image/cat3.jpg";
	function getImage(url){
		return new Promise((resolve, reject)=>{
			const img = document.createElement("img");
			img.src=url;
			img.onload=()=>resolve(img);
			img.onerror=(err)=>reject(err);
		})
	}
	function showImage(imgs){
		imgs.forEach(item=>{
			document.body.appendChild(item)
		})
	}
	// Promise.all([getImage(imgUrl1),getImage(imgUrl2),getImage(imgUrl3)]).then(showImage);
	function getFrist(img){
		document.body.appendChild(img)
	}
	Promise.race([getImage(imgUrl1),getImage(imgUrl2),getImage(imgUrl3)]).then(getFrist)
}