"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

{
	var Person = function Person(name, age) {
		this.name = name;
		this.age = age;
	};

	Person.prototype.sayHello = function () {
		console.log("\u6211\u53EB" + this.name + ",\u6211\u4ECA\u5E74" + this.age + "\u5C81\u4E86");
	};
	var Per = new Person("王新杰", 22);
	// Per.sayHello()
	console.log(Per);
}
{
	var _Person = function () {
		function _Person(name, age) {
			_classCallCheck(this, _Person);

			this.name = name;
			this.age = age;
		}

		_createClass(_Person, [{
			key: "sayHello",
			value: function sayHello() {
				console.log("\u6211\u53EB" + this.name + ",\u6211\u4ECA\u5E74" + this.age + "\u5C81\u4E86");
			}
		}]);

		return _Person;
	}();

	var _Per = new _Person("李小璐", 20);
	_Per.sayHello();
	console.log(_Per);
}
{
	var _Person2 = function _Person2() {
		var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "zhangsan";

		_classCallCheck(this, _Person2);

		this.name = name;
	};

	var Child = function (_Person3) {
		_inherits(Child, _Person3);

		function Child() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "lisi";

			_classCallCheck(this, Child);

			var _this = _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this, name));

			_this.name = name;
			return _this;
		}

		return Child;
	}(_Person2);

	console.log(new Child());
}
{
	var _Person4 = function () {
		function _Person4() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "海龙";

			_classCallCheck(this, _Person4);

			this.name = name;
		}

		_createClass(_Person4, [{
			key: "fullName",
			get: function get() {
				return this.name + '\xa0' + "马";
			},
			set: function set(value) {
				this.name = value;
			}
		}]);

		return _Person4;
	}();

	var _Per2 = new _Person4();
	console.log(_Per2.fullName);
	_Per2.fullName = "王新杰";
	console.log(_Per2.fullName);
}
{
	// 静态方法
	var _Person5 = function () {
		// static prop = "test"
		function _Person5(name) {
			_classCallCheck(this, _Person5);

			this.name = name;
		}

		_createClass(_Person5, null, [{
			key: "sayHello",
			value: function sayHello(obj) {
				console.log("我叫" + obj.name);
			}
		}]);

		return _Person5;
	}();

	_Person5.prop = "text";
	console.log(_Person5.prop);
	var _Per3 = new _Person5("张三");

	_Person5.sayHello(_Per3);
}