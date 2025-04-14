/*
Iterators and Generators in JavaScript
Task 1: Creating a Simple Generator

Create a generator function numberGenerator() that yields numbers from 1 to 3.



Task 2: Create a Custom Iterator

Create a custom iterator called rangeIterator(start, end) that returns an object that iterates over numbers from start to end.

Each call to .next() should return the next number in the range until it reaches end.



Task 3: Generator Function for Fibonacci Sequence

Create a generator function fibonacciGenerator() that yields numbers from the Fibonacci sequence indefinitely (1, 1, 2, 3, 5, 8, etc.).

Use the next() method to get the next Fibonacci number.
*/


// Task 1
function* numberGenerator() {
    yield 1
    yield 2
    yield 3
}

let mygen = numberGenerator()
// console.log(mygen.next().value);
// console.log(mygen.next().value);
// console.log(mygen.next().value);


// Task 2

function rangeIterator(start, end) {
    return {
        next: function () {
            if (start <= end) {
                return {
                    value : start++,
                    done : false
                }
            }else{
                return{
                    done : true
                }
            }
        }
    }
}

const iterator = rangeIterator(0,5)
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// Task 3

function* fibonacciGenerator(){
    let a = 1
    let b = 1
    let c
    for(let i = 0; i <= 10; i++){
        yield a
        c = a + b
        a = b
        b = c
    }
}

const generator = fibonacciGenerator()
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);