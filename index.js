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
let arr = [1,2,3,4,5,6];
arr.copyWithin(3,0);
console.log(arr)

//fill
//filter
//find findIndex
























































