
var colors = []; // 创建一个数组
var count = colors.push('red', 'green'); // 末尾推入两项
console.log(count); //2
colors.push('black'); // 末尾推入另一项
console.log(colors); //3
var item = colors.pop(); // 末尾弹出最后一项
console.log(item); //'black'
console.log(colors); //2
