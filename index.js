// let[x,y=(function(){
//     console.log("哈哈")
//     return 10              
// }())] = [1];
// console.log(x,y)

//省略赋值
// let[,,x] = [1,2,3];
// console.log(x)

//不定参数赋值
// let [x,y,...z] = [1,2,3,4,5];
// console.log(z);

//对象的结构赋值
// let{name,age} = {name:"何惧之有？",age:18};
// console.log(name+"=="+age)

//对象也可以设置默认值
// let {name,age=18,sex="男"} ={name:"小红",sex:"女"}
// console.log(name,age,sex)

//嵌套
// let{name,age=100,list:[a,b,c]}={name:"资源帝",age:undefined,list:["韩信","李白","花木兰"]}
// console.log(name,age,a,b,c)


// let x1,x2;
// ({x1,x2}={x1:"臭苏苏",x2:"dsd"})
// console.log(x1,x2)

//其他结构赋值的情况
//使用数组的结构赋值的情况，如果右边不是数组他会默认的转化为数组
// let [x,y,z] = "123";
// console.log(x,y,z)//1 2 3

// let {length:b} ="1234";
// console.log(b)

// function  getArr([a,b,c,...d]){
//     console.log(a,b,c,d)
// }
// getArr([1,2,3,4,5])

// function getyour({name="哈喽我的",age=18}){
//    console.log(name,age)
// }
// getyour({})

//模板字符串
//console.log(String.prototype)
//includes 返回布尔值 作用是看我们的代码里面有没有指定的字符
//1、查找的数字 2、index
 //let str = "abcadajrwejfjewjeoiowidjsaj";
// console.dir(str.includes("查找的值",10));

//startsWidth  endsWith
//指定字符串是不是以指定字符作为开头这俩玩意返回的也是布尔值
      //console.log(str.startsWith("a",5)) 
     // console.log(str.endsWith("c",3))   //第二个参数表示前几个       

//repeat重复 repeat(num) 将字符串重复num次，num必须取整
// const ss = "12345";
// console.log(ss.repeat(2))

//padStart padEnd
//1、长度length 2、指定字符
//let atr  = "kfc";
//console.log(atr.padStart(4,"w"))
//console.log(atr.padEnd("5","sb"))

//模板字符串
// let str = `Hellow`;
// let str1 = `Word`;

// console.log(`${str} ${str1}`)

// let className = "box",name="你妈炸了"
// document.body.innerHTML =`<h1 class=${className}>${name}</h1>`

//数组的扩展
//console.log(Array("1"))//返回一个数组哦
//console.log(Array.of(2))//解决了Array传单个数字返回一个empty的问题

//From(数组/类数组(有length属性))
// console.log(Array.from("123456"))

//console.log(Array.prototype)

//copyWithin  从原数组中读取内容然后替换数组指定位置的内容
//let arr = [1,2,3,4,5,6];
// arr.copyWithin(3,0);
// console.log(arr)

//fill
// let a = arr.fill("苏明宇",3,5);//可以指定他替换的位置呢
// console.log(a)

//filter
// let arr3 = ["苏明玉","苏敏泽","无可厚非",2,34,3];
//  let arrx = arr3.filter(function(item,index){
//         //return ture 就会留下当前项，false则不会留下
//     return  typeof item === "number"
// })
// console.log(arrx)

//find 
//  let arr = [1,2,3,"机器公敌"]
//  let a = arr.find(function(item){
//        return typeof  item ==="number"
//  })
//  console.log(a)//1   只会查找一个

//findIndex
//这玩意查找的是索引

//includes
// console.log([1,2,3,4].includes(2))

//every
// let arr= [12,23,234,2,"在多少"].every(function(item){
//       return typeof item === "number"
// });
// console.log(arr) fasle
// 有一个false 的话就都是false

//some
//只要有一个ture 就是true 跟every相反

//reduce迭代
//reduce(prev,item) prev上一次的返回值 item当前项 
// let arr = [1,2,3,4,5].reduce(function(prev,item){
//         return prev+item
// })
// console.log(arr)//15

//reduceRight 跟reduce一样只是从右边开始的

//keys 遍历索引接口？
// let arr5 =["a","b","c","e"];
// for(let key of arr5.keys()){
//   console.log(key)
// }

//entries
// for(let [index,item] of arr5.entries()){
//       console.log(index,item)
// }


//数组的空位      数组的某个索引位置没有任何值 undefined 不是空位
// 判断一个数组中某一个位置是不是空位用  in方法
// let arr = [,,undefined,,,,,];
// console.log(arr.length);
// console.log(2 in arr)

//函数的扩展
// function arr({name="公敌",age=18}){
//       console.log(name +"========="+age)
// }
// arr({name:"loser",age:90})

// let muset = (...rest) =>{
//  console.log(rest)
// }
// muset(1,2,3,4,5);

//
// function fn(){

// }
// let a = fn.bind(null)
// console.log(a.name)

//函数参数作用域的问题

//...扩展运算符
//类数组（带length属性的）转换为数组
// let str = "123";
// console.log([...str])


//  let arr = [1,2,3,4,5];
//  let arr1 = [6,7,8,9,10];
//  console.log([...arr,...arr1])
// console.log(arr.concat(arr1))//合并数组


// let arr = [1,2,3,45,323];
// console.log(Math.max.apply(null,arr))//求最大值

// let arr = [1,23,34,"加"]
// let a  = arr.filter(item =>{
//       return typeof item ==="number"
// })
// document.getElementsByTagName("div")[0].innerHTML = a

















































