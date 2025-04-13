/*
A generator is a special type of function that can pause the execution and resume it later.
It uses yield keyword to produce the value one at a time.
*/

function* myGenerator(){
    yield 1
    yield 2
    yield 3
}

let gen = myGenerator()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)