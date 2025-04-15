/*
A generator is a special type of function that can pause the execution and resume it later. It also return special type of object called Generator. Generator object has value and done properties.

An iterator is an object that traverse through data structure and return an object. It also returns an object which has property of value and done properties.

.next().value are the very special to get result from iterator and generator.
*/

// Task 1 - Create a generator that generates fibonacci series {0 1 1 2 3 5 8}

function* getFibonacci(length) {
    let a = 0
    let b = 1
    let c

    for (let i = 1; i <= length; i++) {
        yield a
        c = a + b
        a = b
        b = c
    }
}

const gene = getFibonacci(2)
// console.log(gene.next());
// console.log(gene.next());
// console.log(gene.next());


// Task 2 - Create an iterator that return value from start to end

function getOneAtATime(start, end) {
    return {
        next: function () {
            if (start <= end) {
                return {
                    value: start++,
                    done: false
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}

let iterator = getOneAtATime(1,5)
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());