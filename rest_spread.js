let a=[1,2,3];
let b=[4,5,6];
console.log(...a, ...b);
console.log(a,b);
function sums(...num){
    console.log(num);
}
console.log(sums(a,b));