// function hy(name) {
//     console.log("hey " + name + "hy i am prince ")
//     console.log("hey " + name + "hy i am rahul ")
//     console.log("hey " + name + "hy i am raj ")
// }
// hy("prince")

function sum(a, b, c = 4) {
    // console.log(a + b)
    return a + b + c
}
result1 = sum(5, 10)
result2 = sum(5, 15)
result3 = sum(5, 50)
result4 = sum(5, 0)

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);


//  arrow function

const fonc1 = (x) => {
    console.log("i am arrow fuction",x);
}   
fonc1(32);
fonc1(2);
fonc1(3);