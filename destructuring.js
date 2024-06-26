
//destructuring - extracting values and allocating it to individual vars
let a = [3,5,7,8,6];
console.log(a);
//let [c,d] = a;
//console.log(c);
//console.log(d);
let [c,d,e,f,g]=a; //array destructuring
console.log(c,d,e,f,g);

const names = "My name is Anujna Ganesh".split(' ');
console.log(names);
let [x,y, ...z]= names;
console.log(x);
console.log(y);
console.log(z);
//three dots prior to a variable means - rest of the elements. So z took rest of the elements

//object destructuring
const food = {
    fruit : 'apple',
    veggy:'potato',
    cost: 50
}
let {fruit,veggy,cost} =food;
console.log(fruit,veggy,cost);

