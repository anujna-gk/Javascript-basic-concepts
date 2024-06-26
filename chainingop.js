let person = {
    age: 20,
    id: 3456,
    vehicle : {
        car : "yes",
        date : 2022,
        service : {
            warranty: {
                year: 3,
                warr_date : 12,
                wash() {
                    return "Kept for service under warranty";
                }
            }
        }
    }
}
a = person.age;
b = person.vehicle?.car; //if the person has vehicle, display if it is car
// if there's no vehicle object in person, then o/p is undefined
console.log(b);
console.log(person.vehicle?.service?.warranty?.year); // 3
console.log(person.vehicle?.service?.warranty?.wash?.());
//  calling the fn if it exist
console.log(person.vehicle?.color); //does not exist

//Null coalescing operator - ??

console.log(person.vehicle?.color ?? "red");
//This means that if the left side of "??" is null/undefined, then the right
// side value - default value is outputed
