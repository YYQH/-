/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ({

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 定义类
var Player = function () {
	_createClass(Player, [{
		key: 'num',
		get: function get() {
			return 50;
		}
		// 构造函数

	}]);

	function Player(color) {
		_classCallCheck(this, Player);

		this.color = color;
	}
	// 原型方法


	_createClass(Player, [{
		key: 'getColor',
		value: function getColor() {
			return this.color;
		}
		// 静态方法

	}], [{
		key: 'getCar',
		value: function getCar() {
			return this.car;
		}
		// 静态属性

	}, {
		key: 'car',
		get: function get() {
			return '奔驰';
		}
	}]);

	return Player;
}();
// 静态属性和方法


Player.teacher = 'Mr Zhang';
Player.getTeacher = function () {
	return this.teacher;
};
// 实例化
// let p = new Player('green');

// 定义子类

var Sprite = function (_Player) {
	_inherits(Sprite, _Player);

	// 构造函数
	function Sprite(color, speed) {
		_classCallCheck(this, Sprite);

		// 存储速度
		var _this = _possibleConstructorReturn(this, (Sprite.__proto__ || Object.getPrototypeOf(Sprite)).call(this, color));
		// 复用父类构造函数


		_this.speed = speed;
		return _this;
	}
	// 获取速度方法


	_createClass(Sprite, [{
		key: 'getSpeed',
		value: function getSpeed() {
			return this.speed;
		}
	}]);

	return Sprite;
}(Player);
// 实例化精灵


var s = new Sprite('pink', 20);
console.log(s);
// 继承了静态属性方法
console.log(Sprite.car);
console.log(Sprite.getCar());
console.log(Sprite.teacher);
console.log(Sprite.getTeacher());

// console.log(p)
// // 遍历
// for (var i in p) {
// 	console.log(111, i, p[i])
// }
// // 静态属性通过类方法
// console.log(Player.car)
// console.log(Player.getCar())
// console.log(Player.teacher)
// console.log(Player.getTeacher())
// // 遍历
// for (let i in Player) {
// 	console.log(123, i, Player[i])
// }
// // 省略new
// var p2 = Player();
// console.log(p2)

/***/ })

/******/ });