{
	// es5
	const str1="a";
	const str2 = "\u20BA0"
	console.log(str2);
	// es6
	const str3= "\u{20bb7}";
	// console.log(str3)
}
{
	const str3= "\u{20bb7}";
	// console.log(str3);
	/* for(let i = 0;i<str3.length;i++){
		console.log(str3[i]);
	} */
	for (let s of str3) {
		console.log(s);
	}
}
{
	const str = "webwebwbewbewebweb";
	console.log("includes",str.includes("web"));
	console.log("startsWith",str.startsWith("web"));
	console.log("endsWith",str.startsWith("web"));
	const str1 = "web";
	console.log(str1.repeat(2))
	
}
// 字符串补全 第一个参数是补全后的字符串长度，第二个参数是用于补全的  字符串
// padStart(length, str)
// padEnd(length, str)
{
	const str = "web";
	console.log(str.padStart(6,"abcd"))
	console.log(str.padEnd(6,"abcd"))
}
{
	// 模板字符 `${变量}`
	let name = "zhangsan";
	let age = 18;
	let hobby = "playing";
	const str = "我叫"+name+",我今年"+age+"岁了,我喜欢"+hobby+",";
	console.log(str);
	const str1 = `我叫${name},我今年${age}岁了,我喜欢${hobby}`;
	console.log(str1)
}