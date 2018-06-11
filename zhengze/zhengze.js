// 正则的两种创建方式

// var reg = /\w/;
// var reg  = new RegExp("");
// console.log(RegExp.prototype,999);

// \右斜杠是转义字符
// ^ 以设么开始
//  $以什么结尾

// \d   一个0-9之间的数字

// var reg = /^\d$/;  //以一个0-9的数字开头，一个0-9的数字结尾
// var reg1 =/\d\d\d/   //只能是3个数字
// var str1 = 999;
// var str2 = 'nihao98'
// console.log(reg.test(str1),reg.test(str2),reg1.test(str1));

//量词元字符
//  *出现0或者多次
//  ？出现0或者1次
//  +出现1或者多次
//  {n}出现n次
//  {n,}出现n到多次
//  {n,m}出现n到m次
//  . 除了\n以外的所有一个字符
// var reg2 = /^0.2$/;
// console.log(reg2.test('0.2'))  //true
// console.log(reg2.test('0-2')) //true
// console.log(reg2.test('082'))  //true
// console.log(reg2.test('08762'))  //false  中间不能是多个，.只能是一个
// var reg3 = /^0\.2$/   //只能是0.2    .号被转义了
// console.log(reg3.test('0.2')) //true
// console.log(reg3.test('092')) //false


//()表示分\d组
var reg4 = /^\d+zhufeng\d+$/;
console.log(reg4.test('2015zhufeng2016'))

var reg5 = /^(\d+)zhufeng(\d+)$/   //()分组就是把一个大正则分为好多个小正则

// x|y: 表示x或者y中的一个
// [xyz]: 表示xyz中的一个
//  [^xyz]  ^读非，表示非xyz中的任意一个字符
//   [a-z]   -表示区间，表示a-z中的任意一个字符
//   [^a-z]  除了a-z之间的任意一个字符
//   \d:一个0-9之间的一个数字          \D:除了0-9之间的任意一个数字
//    \b:匹配一个边界符  \B:除了边界符以外的一个字符
//     \w:数字、字母下划线中的任意一个字符 ==[(a-z)(0-9)(A-Z)(_)]([xyzd]的意思,四个中的一个)
//     \W:非数字字母下划线中的任意一个字符
//      \s:表示匹配制表符、换页符、空白符.....中的一个
//