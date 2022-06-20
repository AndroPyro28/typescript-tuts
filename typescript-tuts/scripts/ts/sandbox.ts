let greet: Function;

greet = () => {
    console.log(`hello ${name}`)
}

const add = (x: number, y:(number|string)=11):void => {
    console.log({x, y})
}

add(5, 50);

const minus = (x:number, y:number):number => { // explicitly must return number
    return x + y;
}
let result:(number| string) = minus(5,5);

