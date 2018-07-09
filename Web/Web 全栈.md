<b style="font-size: 42px;font-family: 'Consolas';">Web 全栈学习笔记</b>
***
# 写在前头 #
<p style="font-size: 18px;">创建时间：2018/6/23 18:43 </p> 
<p style="font-size: 18px;"><a href="https://github.com/zhangxl98/StudyNotes/tree/master/Web">GitHub</a></p> 
<p style="font-size: 18px;">更新日志：</p> 
<table style="border: 1;">
	<caption><b style="font-size: 22px;font-family: '微软雅黑';">更新日志</b></caption>
	<tr>
		<th>时间</th>
		<th>编写者</th>
		<th>更新说明</th>

		<th>备注</th>
	</tr>


	<tr>
		<td>2018/6/23 19:40:01 </td>
		<td>张晓亮</td>
		<td>完成了目录大纲，并正式开始编写此文档</td>
		<td>无</td>
	</tr>
	<tr>
		<td>2018/6/24 0:32:54 </td>
		<td>张晓亮</td>
		<td>对【JavaScript 高级】目录下【ECMAScript 6】进行了编辑</td>
		<td>无</td>
	</tr>
	<tr>
		<td>2018/6/24 14:36:12 </td>
		<td>张晓亮</td>
		<td>基本完成了
【JavaScript 高级】目录下【ECMAScript 6】的编辑</td>
		<td>无</td>
	</tr>
	<tr>
		<td>2018/6/29 16:08:07 </td>
		<td>张晓亮</td>
		<td>添加了【微信系列】及其子目录</td>
		<td>无</td>
	</tr>
	<tr>
		<td>2018/6/29 23:02:39 </td>
		<td>张晓亮</td>
		<td>对【全栈】目录下【Node.js】进行了编辑</td>
		<td>无</td>
	</tr>
	<tr>
		<td>2018/7/5 2:01:08 </td>
		<td>张晓亮</td>
		<td>对【工程化&构建】目录下内容进行了编辑</td>
		<td>提交到了 GitHub</td>
	</tr>
	<tr>
		<td>2018/7/5 20:01:47 </td>
		<td>张晓亮</td>
		<td>对【主流框架】目录下【架构模式：MVC、MVP、MVVM】进行了编辑</td>
		<td>无</td>
	</tr>
	<tr>
		<td>2018/7/6 1:49:44 </td>
		<td>张晓亮</td>
		<td>对【主流框架】目录下【AngularJS】进行了编辑</td>
		<td>无</td>
	</tr>
	<tr>
		<td>2018/7/10 3:46:40 </td>
		<td>张晓亮</td>
		<td>对【主流框架】目录下【React】进行了编辑</td>
		<td>提交到了 GitHub</td>
	</tr>
</table>
***
# JavaScript 高级 #
## 面向对象、继承、闭包 ##
## ECMAScript 6 ##
### 介绍 ###
- ECMAScript和JavaScript 
	- ECMA是标准，JS是实现
	- 类似于HTML5是标准，IE10、Chrome、FF都是实现 
- ECMAScript简称**ECMA或ES**
- 目前版本 
	- 低级浏览器主要支持ES 3.1 
	- 高级浏览器正在从ES 5过渡到ES 6 
		
### 历史版本  ###
<table style="border: 1;">
	<caption style="font-family: '微软雅黑';">ECMAScript 历史版本</caption>
	<tr>
		<th>时间</th>
		<th>ECMA</th>
		<th>说明</th>
	</tr>
	<tr>
		<td>1996.11</td>
		<td>ES 1.0</td>
		<td>JS稳定<br/>Netscape将JS提交给ECMA组织，ES正式出现</td>
	</tr>
	<tr>
		<td>1998.06</td>
		<td>ES 2.0</td>
		<td>ES2正式发布</td>
	</tr>
	<tr>
		<td>1999.12</td>
		<td>ES 3.0</td>
		<td>ES3被广泛支持</td>
	</tr>
	<tr>
		<td>2007.10</td>
		<td>ES 4.0</td>
		<td>ES4过于激进，被废除了</td>
	</tr>
	<tr>
		<td>2008.07</td>
		<td>ES 3.1</td>
		<td>4.0退化为严重缩水版的3.1<br/>代号为Harmony(和谐)</td>
	</tr>
	<tr>
		<td>2009.12</td>
		<td>ES 5.0</td>
		<td>ES 5.0正式发布<br/>同时公布了JavaScript.next也就是后来的ES 6.0</td>
	</tr>
	<tr>
		<td>2011.06</td>
		<td>ES 5.1</td>
		<td>ES 5.1成为了ISO国际标准</td>
	</tr>
	<tr>
		<td>2013.03</td>
		<td>ES 6.0</td>
		<td>ES 6.0草案定稿</td>
	</tr>
	<tr>
		<td>2013.12</td>
		<td>ES 6.0</td>
		<td>ES 6.0草案发布</td>
	</tr>
	<tr>
		<td>2015.06</td>
		<td>ES 6.0</td>
		<td>ES 6.0预计发布正式版<br/>JavaScript.next开始指向ES 7.0</td>
	</tr>	
</table>
### 兼容性 ###
- ES6(ES2015)——IE10+、Chrome、FireFox、移动端、NodeJS  
- 兼容浏览器方法
	- 1.在线转换 babel([browser.js](.\www\browser.js "browser.js"))  
	- 2.提前编译  

`babel` 使用方法：

	  1 <script src="browser.js" charset="utf-8"></script>
	  2 <script type="text/babel">
	  3 	let a=1;
	  4 	let b=2;
	  5 	alert(a+b);
	  6 </script>
### ES 6.0的新特性 ###
1. 变量
2. 函数
3. 数组
4. 字符串
5. 面向对象
6. Promise
7. generator
8. 模块化
### 变量 ###
- `let`		
- 不能重复声明，变量-可以修改，有块级作用域
- `const`	
- 不能重复声明，常量-不能修改，有块级作用域

### 函数--箭头函数 ###
原来的函数写法：  

	  1 function [函数名](){
	  2 	//...
	  3 }
箭头函数写法：

	  1 ()=>{
	  2 	//...
	  3 }
1. 如果只有一个参数，`()`可以省
2. 如果只有一个`return`，`{}`可以省  
	示例：  

		  1 <script>
		  2 	let show=a=>a*2;
		  3 	alert(show(5));
		  4 </script>
### 函数--函数的参数 ###
1. 参数扩展/数组展开  
	 1.收集参数  

		  1 function show(a, b, ...args){}  
		  2 //Rest Parameter必须是最后一个
	 2.展开数组
	  
		  1 <script>
		  2 	let arr=[1,2,3];
		  3 	show(...arr);
		  4 	//展开后的效果，跟直接把数组的内容写在这儿一样
		  5 
		  6 	//...arr
		  7 	//1,2,3
		  8 	//show(1,2,3);
		  9 			
		 10 	function show(a, b, c){
		 11 		alert(a);
		 12 		alert(b);
		 13 		alert(c);
		 14 	}
		 15 </script>

2. 默认参数

		  1 $('#div1').animate({width: '200px'});
		  2 $('#div1').animate({width: '200px'}, 1000);

### 解构赋值 ###
1. 左右两边结构必须一样
2. 右边必须是个东西
3. 声明和赋值不能分开(必须在一句话里完成)  
	示例：
	
		  1 let [a,b,c] = [1,3,5];
		  2 let {a,b,c} = {a: 1, b: 3, c: 5};

### 数组 ###
1. map  
	映射，一个对一个  
	示例：

		  1 <script>
		  2 	let arr=[1,3,5];
		  3 	let result=arr.map(item=>item*2);
		  4 	//将数组 arr 的每个值×2，映射为数组 result
		  5 	alert(result);
		  6 </script>
2. reduce  
	汇总，一堆出来一个  
	示例：  
		
		  1 //加法
		  2 <script>
		  3 	let arr = [12, 123, 258, 456];
		  4 
		  5 	let result = arr.reduce(function(tmp, item, index) {
		  6 		//alert(tmp+','+item+','+index);
		  7 		return tmp + item;
		  8 	});
		  9 
		 10 	alert(result);
		 11 </script>
		 12 
		 13 //平均数
		 14 <script>
		 15 	let arr = [12, 123, 258, 456];
		 16 
		 17 	let result = arr.reduce(function(tmp, item, index) {
		 18 		if(index != arr.length - 1) { //不是最后一次
		 19 			return tmp + item;
		 20 		} else { //最后一次
		 21 			return(tmp + item) / arr.length;
		 22 		}
		 23 	});
		 24 
		 25 	alert(result);
		 26 </script>
3. filter  
	过滤器  
	示例：

		  1 <script>
		  2 	//输出能被3整除的
		  3 	let arr = [12, 5, 8, 99, 27, 36, 75, 11];
		  4 
		  5 //	let result = arr.filter(item => {
		  6 //		if(item % 3 == 0) {
		  7 //			return true;
		  8 //		} else {
		  9 //			return false;
		 10 //		}
		 11 //	});
		 12 	//返回的是布尔值
		 13 	let result = arr.filter(item => {
		 14 		return item % 3 == 0;
		 15 	});
		 16 
		 17 	alert(result);
		 18 </script>
4. forEach  
	循环(迭代)  
	示例：

		  1 <script>
		  2 	let arr = [12, 5, 8, 9];
		  3 
		  4 	arr.forEach((item, index) => {
		  5 		alert(index + ': ' + item);
		  6 	});
		  7 </script>
### 字符串 ###
1. 多了两个新方法
	1. `startsWith()`
	2. `endsWith()`
2. 字符串模板--字符串连接  
		1. 直接把东西塞到字符串里面--${东西}  
		2. 可以折行  
		示例：  

		  1 <script>
		  2 	let title = '标题';
		  3 	let content = '内容';
		  4 	let str = '<div>\
		  5       <h1>' + title + '</h1>\
		  6       <p>' + content + '</p>\
		  7     </div>';
		  8 
		  9 	let str2 = `<div>
		 10       <h1>${title}</h1>
		 11       <p>${content}</p>
		 12     </div>`;
		 13 </script>
### ES 6的面向对象 ###
1. 面向对象  
	1. `class` 关键字、构造器和类分开了
	2. `calss` 里面直接加方法  
	示例：  
		1. 原来的写法： 
 
				  1 <script>
				  2 	function User(name, pass) {
				  3 		this.name = name;
				  4 		this.pass = pass;
				  5 	}
				  6 
				  7 	User.prototype.showName = function() {
				  8 		alert(this.name);
				  9 	};
				 10 	User.prototype.showPass = function() {
				 11 		alert(this.pass);
				 12 	};
				 13 	
				 14 	var u1 = new User('张三', '123456');
				 15 
				 16 	u1.showName();
				 17 	u1.showPass();
				 18 </script>
		2. 现在的写法：  

				  1 <script>
				  2 	class User {
				  3 		constructor(name, pass) {
				  4 			this.name = name;
				  5 			this.pass = pass;
				  6 		}
				  7 
				  8 		showName() {
				  9 			alert(this.name);
				 10 		}
				 11 		showPass() {
				 12 			alert(this.pass);
				 13 		}
				 14 	}
				 15 	
				 16 	var u1 = new User('张三', '123456');
				 17 
				 18 	u1.showName();
				 19 	u1.showPass();
				 20 </script>

2. 继承  
	`super()` 超类  
	示例：  
	1. 原来的写法：

			  1 <script>
			  2 	function VipUser(name, pass, level) {
			  3 		User.call(this, name, pass);
			  4 
			  5 		this.level = level;
			  6 	}
			  7 
			  8 	VipUser.prototype = new User();
			  9 	VipUser.prototype.constructor = VipUser;
			 10 
			 11 	VipUser.prototype.showLevel = function() {
			 12 		alert(this.level);
			 13 	};
			 14 
			 15 	var v1 = new VipUser('李四', '123456', 3);
			 16 
			 17 	v1.showName();
			 18 	v1.showPass();
			 19 	v1.showLevel();
			 20 </script>

	1. 现在的写法：  

			  1 <script>
			  2 	class VipUser extends User {
			  3 		constructor(name, pass, level) {
			  4 			super(name, pass);
			  5 
			  6 			this.level = level;
			  7 		}
			  8 
			  9 		showLevel() {
			 10 			alert(this.level);
			 11 		}
			 12 	}
			 13 
			 14 	var v1 = new VipUser('李四', '123456', 3);
			 15 
			 16 	v1.showName();
			 17 	v1.showPass();
			 18 	v1.showLevel();
			 19 </script>
### 面向对象应用--Reacter ###
1. 组件化--`class`
2. JSX  
	示例：  
	[react.js](.\www\react.js "react.js")、[react-dom.js](.\www\react-dom.js "react-dom.js")、[browser.js](.\www\browser.js "browser.js")    
		
		  1 <script src="react.js" charset="utf-8"></script>
		  2 <script src="react-dom.js" charset="utf-8"></script>
		  3 <script src="browser.js" charset="utf-8"></script>
		  4 <script type="text/babel">
		  5 	class Item extends React.Component{
		  6 	  constructor(...args){
		  7 	    super(...args);
		  8 	  }
		  9 	
		 10 	  render(){
		 11 	    return <li>{this.props.str}</li>;
		 12 	  }
		 13 	}
		 14 	
		 15 	class List extends React.Component{
		 16 	  constructor(...args){
		 17 	    super(...args);
		 18 	  }
		 19 	
		 20 	  render(){
		 21 	    return <ul>
		 22 	      {this.props.arr.map(a=><Item str={a}></Item>)}
		 23 	    </ul>;
		 24 	  }
		 25 	}
		 26 	
		 27 	window.onload=function (){
		 28 	  let oDiv=document.getElementById('div1');
		 29 	
		 30 	  ReactDOM.render(
		 31 	    <List arr={['abc', 'erw', 'sdfasdf', 'dfasdfsdfds']}></List>,
		 32 	    oDiv
		 33 	  );
		 34 	};
		 35 </script>
### json ###
1. JSON 对象  
	1. `JSON.stringify()`  
	2. `JSON.parse()`
2. 简写
	1. 名字跟值(`key`和`value`)一样的，留一个就行
	2. 方法简写--`: function`一起删除  
		`show: function (){...}`==>`show(){...}`
3. json的标准写法：
	1. 只能用双引号
	2. 所有的名字都必须用引号包起来  
 
			  1 {a: 12, b: 5}       ×
			  2 {"a": 12, "b": 5}   √
			  3 
			  4 {a: 'abc', b: 5}    ×
			  5 {"a": "abc", "b": 5}√
### Promise ###
1. 异步和同步  
	1. 异步：代码更复杂，操作之间没啥关系，同时进行多个操作
	2. 同步：代码简单，同时只能做一件事  
2. Promise的两个方法：  
	1. `Promise.all()`  
	2. `Promise.race()`  
3. 有了`Promise`之后的异步：  

		  1 Promise.all([
		  2 	$.ajax(),
		  3 	$.ajax()
		  4 ]).then(results=>{
		  5   //对了
		  6 }, err=>{
		  7   //错了
		  8 });
### generator--介绍 ###
1. 普通函数与generator
	1. 普通函数--一路到底  
		示例：  

			  1 function 函数(){
			  2 	//...
			  3 
			  4 	ajax(xxx, function (){
			  5     //...
			  6 	});
			  7 }
	2. generator函数--中间能停  
		示例：  

			  1 function *函数(){
			  2 	//...
			  3 
			  4 	yield ajax(xxx);
			  5 
			  6 	//...
			  7 }
2. yield  
	1. 可以传参  
		示例：  

			  1 <script>
			  2 	function* show(num1, num2) {
			  3 		alert(`${num1}, ${num2}`);
			  4 		alert('a');
			  5 
			  6 		let a = yield;
			  7 
			  8 		alert('b');
			  9 		alert(a);
			 10 
			 11 		return;
			 12 	}
			 13 
			 14 	let gen = show(1, 2);
			 15 
			 16 	gen.next(3); //第一个next没法给yield传参
			 17 	gen.next(4);
			 18 </script>
	2. 可以返回  
		示例：

			  1 <script>
			  2 	function* show() {
			  3 		alert('a');
			  4 
			  5 		yield 12;
			  6 
			  7 		alert('b');
			  8 
			  9 		return 34;
			 10 	}
			 11 
			 12 	let gen = show();
			 13 
			 14 	let res1 = gen.next();
			 15 	console.log(res1); //{value: 12, done: false}
			 16 
			 17 	let res2 = gen.next();
			 18 	console.log(res2); //{value: 34, done: true}
			 19 </script>
### generator--实例-runner ###
1. 异步操作方法：  
	1. 普通回调  
	2. Promise
	3. generator  
		需要引入[runner.js](.\www\runner.js "runner.js")和[jquery.js](.\www\jquery.js "jquery.js")   


			  1 //runner.js
			  2 </script>
			  3 	function runner(_gen) {
			  4 		return new Promise((resolve, reject) => {
			  5 			var gen = _gen();
			  6 
			  7 			_next();
			  8 
			  9 			function _next(_last_res) {
			 10 				var res = gen.next(_last_res);
			 11 
			 12 				if(!res.done) {
			 13 					var obj = res.value;
			 14 
			 15 					if(obj.then) {
			 16 						obj.then((res) => {
			 17 							_next(res);
			 18 						}, (err) => {
			 19 							reject(err);
			 20 						});
			 21 					} else if(typeof obj == 'function') {
			 22 						if(obj.constructor.toString().startsWith('function GeneratorFunction()')) {
			 23 							runner(obj).then(res => _next(res), reject);
			 24 						} else {
			 25 							_next(obj());
			 26 						}
			 27 					} else {
			 28 						_next(obj);
			 29 					}
			 30 				} else {
			 31 					resolve(res.value);
			 32 				}
			 33 			}
			 34 		});
			 35 	}
			 36 </script>
2. 普通的异步操作：  
	1. 普通回调：  

			  1 //回调
			  2 $.ajax({
			  3 	url: xxx,
			  4 	dataType: 'json'
			  5 	success(data1){
			  6 		$.ajax({
			  7 			url: xxx,
			  8 			dataType: 'json'
			  9 			success(data2){
			 10 				$.ajax({
			 11 					url: xxx,
			 12 					dataType: 'json'
			 13 					success(data3){
			 14 						//完成...
			 15 					},
			 16 					error(){
			 17 						alert('失败');
			 18 					}
			 19 				});
			 20 			},
			 21 			error(){
			 22 				alert('失败');
			 23 			}
			 24 		});
			 25 	},
			 26 	error(){
			 27 		alert('失败');
			 28 	}
			 29 });
	2. Promise：  

			  1 //Promise
			  2 Promise.all([
			  3 	$.ajax({url: xxx, dataType: 'json'}),
			  4 	$.ajax({url: xxx, dataType: 'json'}),
			  5 	$.ajax({url: xxx, dataType: 'json'})
			  6 ]).then(results=>{
			  7 	//完成...
			  8 }, err=>{
			  9 	alert('失败');
			 10 });
	3. generator：  

			  1 //generator
			  2 runner(function *(){
			  3 	let data1=yield $.ajax({url: xxx, dataType: 'json'});
			  4 	let data2=yield $.ajax({url: xxx, dataType: 'json'});
			  5 	let data3=yield $.ajax({url: xxx, dataType: 'json'});
			  6 
			  7 	//完成...
			  8 });
3. 带逻辑的异步操作：  
	1. 普通回调：  

			  1 //带逻辑-普通回调
			  2 $.ajax({url: 'getUserData', dataType: 'json', success(userData){
			  3 	if(userData.type=='VIP'){
			  4 		$.ajax({url: 'getVIPItems', dataType: 'json', success(items){
			  5 			//完成...
			  6 		}, error(err){
			  7 			alert('失败');
			  8 		}});
			  9 	}else{
			 10 		$.ajax({url: 'getItems', dataType: 'json', success(items){
			 11 		//完成...
			 12 		}, error(err){
			 13 			alert('失败');
			 14 		}});
			 15 	}
			 16 }, error(err){
			 17 	alert('失败');
			 18 }});
	2. Promise：  

			  1 //带逻辑-Promise
			  2 Promise.all([
			  3 	$.ajax({url: 'getUserData', dataType: 'json'})
			  4 ]).then(results=>{
			  5 	let userData=results[0];
			  6 
			  7 	if(userData.type=='VIP'){
			  8 		Promise.all([
			  9 			$.ajax({url: 'getVIPItems', dataType: 'json'})
			 10 		]).then(results=>{
			 11 			let items=results[0];
			 12 
			 13 			//完成...
			 14 		}, err=>{
			 15 			alert('失败');
			 16 		});
			 17 	}else{
			 18 		Promise.all([
			 19 			$.ajax({url: 'getItems', dataType: 'json'})

			 20 		]).then(results=>{
			 21 			let items=results[0];
			 22 
			 23 			//完成...
			 24 		}, err=>{
			 25 			alert('失败');
			 26 		});
			 27 	}
			 28 }, err=>{
			 29 	alert('失败');
			 30 });
	3. generator：  

			  1 //带逻辑-generator
			  2 runner(function *(){
			  3 	let userData=yield $.ajax({url: 'getUserData', dataType: 'json'});
			  4 
			  5 	if(userData.type=='VIP'){
			  6 		let items=yield $.ajax({url: 'getVIPItems', dataType: 'json'});
			  7 	}else{
			  8 		let items=yield $.ajax({url: 'getItems', dataType: 'json'});
			  9 	}
			 10 
			 11   //完成...
			 12 });
4. 总结
	1. Promise--一次读一堆
	2. generator--逻辑性读取
### generator--实例-KAO ###
### ES7 & ES8预览 ###

## JavaScript 原理与库封装 ##
## jQuery ##
## 正则表达式与JSON ##
## 事件与运动框架封装 ##

***
# 模块化 #
## CommonJS ##
## AMD--RequireJS ##
## CMD ##
## ES6 Modules ##
***
# HTML5&CSS3 #
## HTML5 ##
## CSS3 ##
## Bootstrap ##
***
# 图形学 #
## Canvas ##
## 数据可视化--Highchart.js ##
***
# 全栈 #
## 前后端通信 ##
## Node.js ##
### http 协议 ###
1. resquest 请求
2. response 响应  
示例：  

		  1 const http=require('http');
		  2 
		  3 http.createServer((req, res) => {
		  4   res.write("Hello World!");
		  5   res.end();
		  6 }).listen(8080);

### 文件操作 File System ###
1. fs--File System  
示例：  

		  1 const http=require('http');
		  2 const fs = require('fs');
		  3 
		  4 http.createServer((req, res) => {
		  5   let file_name='./www'+req.url;
		  6   fs.readFile(file_name, (err, data) => {
		  7     if (err) {
		  8       res.write('404')
		  9     } else {
		 10       res.write(data)
		 11     }
		 12     res.end()
		 13   })
		 14 }).listen(8080);

### 数据请求--GET ###
1. GET 数据解析
	1. [自己切](.\www\node\GET\server.js "自己切")  
		示例：  


	2. querystring  
		示例：  

			  1 const http=require('http');
			  2 const querystring=require('querystring');
			  3 
			  4 http.createServer((req, res) => {
			  5 
			  6   const GET={};
			  7   let url;
			  8 
			  9   if (req.url.indexOf('?')!=-1) {
			 10     let arr=req.url.split('?');
			 11     //arr[0]=>地址
			 12     url=arr[0];
			 13     //arr[1]=>数据
			 14     GET=querystring.parse(arr[1]);
			 15 
			 16   } else {
			 17     url=req.url;
			 18   }
			 19   console.log(url, GET);
			 20   res.write('aaa');
			 21   res.end;
			 22 }).listen(8080);
	3. url  
		示例：  

			  1 const http=require('http');
			  2 const urlLib=require('url');
			  3 
			  4 http.createServer((req, res) => {
			  5 
			  6   let url;
			  7 
			  8   let obj=urlLib.parse(req.url, true);
			  9 
			 10   url=obj.pathname;
			 11   const GET=obj.query;
			 12 
			 13   console.log(url, GET);
			 14   res.write('aaa');
			 15   res.end;
			 16 }).listen(8080);
### 数据请求--POST ###
1. POST 数据分段到达
	1. `data` 一段数据
	2. `end` 全部到达  
			示例：  

			  1 const http = require('http');
			  2 const fs = require('fs');
			  3 const querystring = require('querystring');
			  4 const urlLib = require('url');
			  5 
			  6 http.createServer((req, res) => {
			  7   let obj = urlLib.parse(req.url, true);
			  8 
			  9   let url = obj.pathname;
			 10   const GET = obj.query;
			 11 
			 12   let str = '';
			 13   req.on('data', (data) => {
			 14     str += data;
			 15   });
			 16   req.on('end', () => {
			 17     const POST =  querystring.parse(str);
			 18   });
			 19 
			 20   let file_name = './www' + url;
			 21   fs.readFile(file_name, (err, data) => {
			 22     if (err) {
			 23       res.write('404');
			 24     } else {
			 25       res.write(data);
			 26     }
			 27     res.end;
			 28   })
			 29 }).listen(8080);
### 模块化 ###
1. 系统模块
	<table>
		<caption><b style="font-family: '微软雅黑';">系统模块</b></caption>
			<tr>
				<th>模块</th>
				<td>Crypto</td>
				<td>Events</td>
				<td>Net</td>
				<td>OS</td>
				<td>Path</td>
				<td>Stream</td>
				<td>Timers</td>
				<td>ZLIB</td>
			</tr>

			<tr>
				<th>说明</th>
				<td>加密</td>
				<td>事件</td>
				<td>网络操作</td>
				<td>操作系统信息</td>
				<td>处理文件路径</td>
				<td>流操作</td>
				<td>定时器</td>
				<td>压缩</td>
			</tr>
	</table>
2. 自定义模块
	1. 模块的组成
		1. require--引入其他模块
			1. 如果有"`./`"  
				从当前目录找
			2. 如果没有"`./`"  
				先从系统模块找  
				再从 `node_modules` 找  
		2. exports--输出  
			对外输出东西——必须加给exports
		3. module.exports--批量输出
	2. npm (NodeJS Package Manager)
		1. 下载模块  
		
				  1 npm install xxx
				  2 npm uninstall xxx
		2. 自动解决依赖
	3. 发布自己的模块  

			  1 npm init
			  2 npm publish
			  3 npm --force unpublish
	4. node_modules
		1. 模块放在这个文件夹里
					
3. 包管理器
## Node 项目 ##

***
# 工程化&构建 #
## Git、SVN ##
## Yeoman 脚手架 ##
### Yeoman 官网 ###
[Yeoman 官网](http://yeoman.io/ "Yeoman 官网")
### Yeoman 安装 ###

	  1 npm install -g yo
### Generator ###
1. 安装 grenerator-angular  

		  1 npm install -g grenerator-angular  
2. 生成项测试目录 
 
		  1 mkdir yo-in-action
		  2 cd mkdir yo-in-action 
3. 生成项目目录  

		  1 mkdir angular-in-action
		  2 cd angular-in-action	
4. 生成项目 

		  1 yo angular learnangular

## NPM/Bower 依赖管理工具 ##
### Bower 官网 ###
[Bower 官网](https://bower.io/ "Bower 官网")
### Bower 安装 ###

	  1 npm install -g bower
### Bower 实践 ###
1. 生成项测试目录  

		  1 mkdir bower-in-action
		  2 cd mkdir bower-in-action
2. 生成项目目录  

		  1 mkdir jquery-bootstrap-in-action 
		  2 cd jquery-bootstrap-in-action	
4. 安装组件
   
		  1 bower install jquery
		  2 bower install jbootstrap 
5. 进入目录

		  1 cd bower_components
## Grunt ##
### Grunt 官网 ###
[Grunt 官网](https://gruntjs.com/ "Grunt 官网")  
[Grunt 中文网](http://www.gruntjs.net/ "Grunt 中文网")
### Grunt 安装 ###

	  1 npm install -g grunt-cli
### Grunt 实践 ###
1. Grunt 的 Task,Target 和 Options
	1. 生成项测试目录

			  1 mkdir grunt-in-action 
			  2 cd mkdir grunt-in-actio
	2. 生成项目目录

			  1 mkdir grunt-by-yo 
			  2 cd grunt-by-yo	
	4. 搭建测试项目

			  1 yo webapp grunt-by-yo

## 打包构建 ##
***
# 主流框架 #
## 架构模式：MVC、MVP、MVVM ##
### MVC 模式 ###
<table style="border: 1;">
	<caption style="font-family: '微软雅黑';">MVC 模式</caption>
	<tr>
		<td>M</td>
		<td>Model</td>
		<td>模型-数据</td>
	</tr>
	<tr>
		<td>V</td>
		<td>View</td>
		<td>视图-表现层</td>
	</tr>
	<tr>
		<td>C</td>
		<td>Controller</td>
		<td>控制器-业务逻辑</td>
	</tr>
</table>

1. M和V耦合度高
2. C特别臃肿
### MVP 模式 ###
<table style="border: 1;">
	<caption style="font-family: '微软雅黑';">MVP 模式</caption>
	<tr>
		<td>M</td>
		<td>Model</td>
		<td>模型-数据</td>
	</tr>
	<tr>
		<td>V</td>
		<td>View</td>
		<td>视图-表现层</td>
	</tr>
	<tr>
		<td>P</td>
		<td>Presenter</td>
		<td>主持人</td>
	</tr>
</table>
1. M和V没有耦合
2. P特别特别臃肿
### MVVM 模式 ###
<table style="border: 1;">
	<caption style="font-family: '微软雅黑';">MVVM 模式</caption>
	<tr>
		<td>M</td>
		<td>Model</td>
		<td>模型-数据</td>
	</tr>
	<tr>
		<td>V</td>
		<td>View</td>
		<td>视图-表现层</td>
	</tr>
	<tr>
		<td>VM</td>
		<td>ViewModel</td>
		<td></td>
	</tr>
</table>
1. M和V没有耦合
## Vue ##
## React ##
### 模块化和组件化 ###
1. **模块化：**是从**代码**的角度来进行分析的；把一些可复用的代码，抽离为单个的模块；便于项目的维护和开发；
2. **组件化：** 是从 **UI 界面**的角度 来进行分析的；把一些可服用的UI元素，抽离为单独的组件；便于项目的维护和开发；
3. **组件化的好处：**随着项目规模的增大，手里的组件越来越多；很方便就能把现有的组件，拼接为一个完整的页面；
### 虚拟 DOM ###
1. **DOM 的本质**：浏览器中的概念，用JS对象来表示 页面上的元素，并提供了操作 DOM 对象的API；
2. **React 中的虚拟DOM**：是框架中的概念，是程序员 用JS对象来模拟 页面上的 DOM 和 DOM嵌套；
3. **为什么要实现虚拟 DOM（虚拟DOM的目的）：**为了实现页面中， DOM 元素的高效更新
4. **DOM 和虚拟 DOM 的区别**：
    + **DOM：**浏览器中，提供的概念；用JS对象，表示页面上的元素，并提供了操作元素的API；

    + **虚拟 DOM：**是框架中的概念；而是开发框架的程序员，手动用JS对象来模拟DOM元素和嵌套关系；

      + 本质：用JS对象，来模拟DOM元素和嵌套关系；
      + 目的：就是为了实现页面元素的高效更新；
### Diff算法 ###
1. **tree diff:**新旧两棵DOM树，逐层对比的过程，就是 Tree Diff；当整颗DOM逐层对比完毕，则所有需要被按需更新的元素，必然能够找到；

2. **component diff：**在进行Tree Diff的时候，每一层中，组件级别的对比，叫做 Component Diff；

    - 如果对比前后，组件的类型相同，则**暂时**认为此组件不需要被更新；
    - 如果对比前后，组件类型不同，则需要移除旧组件，创建新组件，并追加到页面上；

3. **element diff:**在进行组件对比的时候，如果两个组件类型相同，则需要进行元素级别的对比，这叫做 Element Diff；
### 创建基本的webpack4.x项目 ###
1. 快速初始化项目  

		  1 npm init -y
2. 在项目根目录创建 `src` 源代码目录和 `dist` 产品目录
3. 在 `src` 目录下创建 `index.html` 和 `index.js`
4. 安装 `webpack`  

		  1 cnpm i webpack webpack-cli -D
5. 在根目录创建并配置 `webpack.config.js` 文件

		  1 // 向外暴露一个打包的配置对象；因为 webpack 是基于Node构建的；所以 webpack 支持所有Node API 和语法
		  2 module.exports = {
		  3   mode: 'development', // development   production
		  4   // 在 webpack 4.x 中，有一个很大的特性，就是约定大于配置，约定默认的打包入口路径是 src -> index.js
		  5 }
6. 注意：webpack 4.x 提供了约定大于配置的概念；目的是为了尽量减少配置文件的体积；
   + 默认约定了：
	   + 打包的入口是 `src/index.js`
	   + 打包的输出文件是 `dist/main.js`
   + 4.x 中 新增了`mode`选项(为必选项)，可选的值为： `development` 和 `production`;
### 实时打包编译 ###
1. 安装 `webpack-dev-server`

	  1 cnpm i webpack-dev-server -D
2. 配置 `package.json` 文件

		  1 "scripts": {
		  2   "test": "echo \"Error: no test specified\" && exit 1",
		  3   "dev": "webpack-dev-server --open --port 3000 --hot --host 127.0.0.1"
		  4 },
3. 将 `index.html` 放入内存中
	1. 安装 `html-webpack-plugin`  

			  1 cnpm i html-webpack-plugin -D
	2. 配置 `webpack.config.js` 文件  

			  1 const path = require('path')
			  2 const HtmlWebPackPlugin = require('html-webpack-plugin') // 导入 在内存中自动生成 index 页面的插件
			  3 
			  4 // 创建一个插件的实例对象
			  5 const htmlPlugin = new HtmlWebPackPlugin({
			  6   template: path.join(__dirname, './src/index.html'), // 源文件
			  7   filename: 'index.html' // 生成的内存中首页的名称
			  8 })
			  9 
			 10 // 向外暴露一个打包的配置对象；因为 webpack 是基于Node构建的；所以 webpack 支持所有Node API 和语法
			 11 module.exports = {
			 12   mode: 'development', // development   production
			 13   // 在 webpack 4.x 中，有一个很大的特性，就是约定大于配置，约定默认的打包入口路径是 src -> index.js
			 14   plugins: [
			 15     htmlPlugin
			 16   ]
			 17 }
### 在项目中使用 react ###
1. 安装包  

		  1 cnpm i react react-dom -S
   + react：专门用于创建组件和虚拟DOM的，同时组件的生命周期都在这个包中
   + react-dom：专门进行DOM操作的，最主要的应用场景，就是    `ReactDOM.render()`

2. 在 `index.html` 页面中，创建容器：

		  1 <!-- 容器，将来使用 React 创建的虚拟DOM元素，都会被渲染到这个指定的容器中 -->
		  2 <div id="app"></div>
3. 编辑 `index.js` 文件

		  1 // 1. 这两个导入时候，接收的成员名称，必须这么写
		  2 import React from 'react' // 创建组件、虚拟DOM元素，生命周期
		  3 import ReactDOM from 'react-dom' // 把创建好的 组件 和 虚拟DOM 放到页面上展示的
		  4 
		  5 // 2. 创建虚拟DOM元素
		  6 // 参数1： 创建的元素的类型，字符串，表示元素的名称
		  7 // 参数2： 是一个对象或 null, 表示 当前这个 DOM 元素的属性
		  8 // 参数3： 子节点（包括 其它 虚拟DOM 获取 文本子节点）
		  9 // 参数n: 其它子节点
		 10 //  <h1 id="myh1" title="this is a h1">这是一个H1</h1>
		 11 // const myh1 = React.createElement('h1', null, '这是一个H1')
		 12 const myh1 = React.createElement('h1', { id: 'myh1', title: 'this is a h1' }, '这是一个H1')
		 13 
		 14 const mydiv = React.createElement('div', null, '这是一个div元素', myh1)
		 15 
		 16 // 3. 使用 ReactDOM 把虚拟DOM 渲染到页面上
		 17 // 参数1： 要渲染的那个虚拟DOM元素
		 18 // 参数2： 指定页面上的DOM元素，当作容器 
		 19 ReactDOM.render(mydiv, document.getElementById('app'))
		 20 // Target container is not a DOM element.  经过分析，猜测：第二个参数接收的应该是一个  DOM 元素而不是 选择器
### JSX语法 ###
1.  安装 `babel` 插件
   
		  1 cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
		  2 cnpm i babel-preset-env babel-preset-stage-0 -D
2. 安装能够识别转换jsx语法的包 `babel-preset-react`

		  1 cnpm i babel-preset-react -D
3. 添加 `.babelrc` 配置文件

		  1 {
		  2   "presets": ["env", "stage-0", "react"],
		  3   "plugins": ["transform-runtime"]
		  4 }
4. 添加 babel-loader 配置项

		  1 // webpack 默认只能打包处理 .js 后缀名类型的文件；像 .png .vue 无法主动处理，所以要配置第三方的loader；
		  2 module.exports = {
		  3   mode: 'development', // development   production
		  4   plugins: [
		  5     htmlPlugin
		  6   ],
		  7   module: { // 所有第三方 模块的配置规则
		  8     rules: [ // 第三方匹配规则
		  9       { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }, // 千万别忘记添加 exclude 排除项
		 10     ]
		 11   },
		 12   resolve: {
		 13     extensions: ['.js', '.jsx', '.json'], // 表示，这几个文件的后缀名，可以省略不写
		 14     alias: { // 表示别名
		 15       '@': path.join(__dirname, './src') // 这样，@ 就表示 项目根目录中 src 的这一层路径
		 16     }
		 17   }
		 18 }
5. 编辑 `index.js` 文件

		  1 // 1. 导入包
		  2 import React from 'react'
		  3 import ReactDOM from 'react-dom'
		  4 
		  5 // 2. 创建虚拟DOM元素
		  6 // 可以使用 babel 来转换 这些 JS 中的标签；
		  7 // JSX 语法的本质，还是在运行的时候，被转换成了 React.createElement 形式来执行的；
		  8 const mydiv = <div id="mydiv" title="div aaa">
		  9 				这是一个div元素
		 10 				<h1>这是一个H1</h1>
		 11 			</div>
		 12 
		 13 // 3. 调用 render 函数渲染
		 14 ReactDOM.render(mydiv, document.getElementById('app'))
## AngularJS ##
### AngularJs 官网 ###
[AngularJs 官网](https://angularjs.org/ "AngularJs 官网")  
[AngularJS 中文网](http://www.angularjs.net.cn/ "AngularJS 中文网")  
[angular.js v1.6.4](./www/AngularJS/angular.js "angular.js v1.6.4")
### ng-model ###
1. 双向绑定  
	*自动同步数据和视图   
### ng-bind ###
1. 单向绑定
	*数据->视图
### ng-app ###
1. 范围
2. 引入模块
### {{表达式}} ###
### ng-init  ###
1. 初始值
	示例：  

		  1 <body ng-init="a=0;b=0;">
		  2 	<input type="text" ng-model="a">
		  3 	<input type="text" ng-model="b">
		  4 	<span>{{a*b}}</span>
		  5 </body>
### ng-repeat ###
1. 循环  
	示例：  

		  1 <body ng-init="arr=[12,5,8]">
		  2 	<ul>
		  3 		<li ng-repeat="(index,val) in arr">{{index}}, {{val}}</li>
		  4 	</ul>
		  5 	<ul>
		  6 		<li ng-repeat="val in arr">{{$index}}, {{val}}</li>
		  7 	</ul>
		  8 </body>

***
# 移动 APP (Web/Native/Hybrid) #
## React Native ##
## Ionic ##
***
# 微信系列 #
## 微信公众号 ##
## 微信小程序 ##