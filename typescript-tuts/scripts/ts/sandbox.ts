let character:string;

let age:number;
let bool:boolean;

age = 30;
character = "asd"
bool = true;

 let mixedArr: (string|number|boolean)[] = ['hotdog', 1, false,] 

 mixedArr.push('cheesedog');
 mixedArr.push(2);
 mixedArr.push(true);
 console.log(mixedArr);

 let uid:(string|number);

 uid = "1"
 uid = 1
//  uid = false will return error

let obj:object = {
    name: "andro",
    age: 21
}

let anotherObj: { // we explicit it declare with : that means it is a object with name is must be string and age must be number
    name: string,
    age: number,
}

anotherObj = {
    name: "andro",
    age:21
}

anotherObj.age = 23
