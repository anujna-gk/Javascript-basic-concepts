let a = [1,3,4,6,8,7];
const out= a.map(double = (i)=> 2*i);
console.log(out);
console.log(a.map(binary = i => i.toString(2))); // displays binary
// or 
console.log(a.map(i => i.toString(2))); //anonymous fn
// always returns an array

//filter
console.log(a.filter(oddnum));
function oddnum (x){
    return x%2; //returns 1 which is like "True"
}
console.log(a.filter(x => x>4)); // o/p elements greater than 4