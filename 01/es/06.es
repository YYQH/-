// 定义类
class Player {
	get num() {
		return 50;
	}
	// 构造函数
	constructor(color) {
		this.color = color;
	}
	// 原型方法
	getColor() {
		return this.color;
	}
	// 静态方法
	static getCar() {
		return this.car;
	}
	// 静态属性
	static get car() {
		return '奔驰'
	}
}
// 静态属性和方法
Player.teacher = 'Mr Zhang';
Player.getTeacher = function() {
	return this.teacher;
}
// 实例化
// let p = new Player('green');

// 定义子类
class Sprite extends Player {
	// 构造函数
	constructor(color, speed) {
		// 复用父类构造函数
		super(color);
		// 存储速度
		this.speed = speed
	}
	// 获取速度方法
	getSpeed() {
		return this.speed;
	}
}
// 实例化精灵
var s = new Sprite('pink', 20);
console.log(s)
// 继承了静态属性方法
console.log(Sprite.car)
console.log(Sprite.getCar())
console.log(Sprite.teacher)
console.log(Sprite.getTeacher())

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