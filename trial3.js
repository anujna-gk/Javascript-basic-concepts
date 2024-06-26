const radius=[2,5,7,4];
function calculate(radius_, logic){
const output=[]
radius_.forEach(i => {
    output.push(logic(i));
});
return output; // this fn is similar to map()
}

//or

radius.map()



//logics

const area = (radius)=>{
return Math.PI*radius*radius;  //showing different ways of function declaration
}

function diameter(radius){
    return 2*radius;
}

const perimeter = function (radius) {
    return 2* Math.PI*radius;
} 

console.log(calculate(radius,area));
console.log(calculate(radius,diameter));
console.log(calculate(radius,perimeter));