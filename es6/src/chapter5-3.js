{
	function Person(name,age){
		this.name = name;
		this.age = age;
	}
	Person.prototype.sayHello=function(){
		console.log(`我叫${this.name},我今年${this.age}岁了`);
	}
	let Per=new Person("王新杰",22);
	// Per.sayHello()
	console.log(Per)
}
{
	class Person{
		constructor(name,age) {
		    this.name=name;
			this.age=age
		}
		sayHello(){
			console.log(`我叫${this.name},我今年${this.age}岁了`);
		}
	} 
	const Per=new Person("李小璐",20);
	Per.sayHello()
	console.log(Per)
}
{
	class Person {
		constructor(name="zhangsan") {
		    this.name=name
		}
	}
	class Child extends Person{
		constructor(name="lisi") {
		    super(name);
			this.name=name
		}
	}
	console.log(new Child())
}
{
	class Person{
		constructor(name="海龙") {
		    this.name=name
		}
		get fullName(){
			return this.name+'\xa0'+"马"
		}
		set fullName(value){
			this.name = value
		}
	}
	const Per = new Person();
	console.log(Per.fullName)
	Per.fullName = "王新杰";
	console.log(Per.fullName)
}
{
	// 静态方法
	class Person {
		// static prop = "test"
		constructor(name) {
		    this.name=name
		}
		static sayHello(obj){
			console.log("我叫"+obj.name);
		}
	}
	Person.prop="text";
	console.log(Person.prop)
	const Per = new Person("张三");
	
	Person.sayHello(Per)
}