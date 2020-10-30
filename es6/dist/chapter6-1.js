"use strict";

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
	var ajax = function ajax() {
		return new Promise(function (resolve, reject) {
			setTimeout(function () {
				return resolve();
			}, 1000);
		});
	};

	ajax().then(function () {
		console.log("任务1");
		return new Promise(function (resolve) {
			setTimeout(function () {
				return resolve();
			}, 1000);
		});
	}).then(function () {
		console.log("任务2");
	});
}
{
	var judgeNumber = function judgeNumber(x) {
		return new Promise(function (resolve, reject) {
			if (typeof x === "number") {
				resolve(x);
			} else {
				var err = new Error("请输入数字");
				reject(err);
			}
		});
	};

	judgeNumber("2").then(function (x) {
		console.log(x);
	}).catch(function (err) {
		console.log(err);
	});
}
{
	var getImage = function getImage(url) {
		return new Promise(function (resolve, reject) {
			var img = document.createElement("img");
			img.src = url;
			img.onload = function () {
				return resolve(img);
			};
			img.onerror = function (err) {
				return reject(err);
			};
		});
	};

	var showImage = function showImage(imgs) {
		imgs.forEach(function (item) {
			document.body.appendChild(item);
		});
	};
	// Promise.all([getImage(imgUrl1),getImage(imgUrl2),getImage(imgUrl3)]).then(showImage);


	var getFrist = function getFrist(img) {
		document.body.appendChild(img);
	};

	var imgUrl1 = "./image/cat1.jpg";
	var imgUrl2 = "./image/cat2.jpg";
	var imgUrl3 = "./image/cat3.jpg";

	Promise.race([getImage(imgUrl1), getImage(imgUrl2), getImage(imgUrl3)]).then(getFrist);
}