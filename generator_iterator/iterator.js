/*
Iterator is javascript mechanism that enables sequential access of data structure one at a time

It returns object as a data

.next() method is used to access next data from data structure

.value takes value from data
*/

const array = ["Apple","Banana","Grape","Litchi","Mango"]

function fruitIterator(array){
    let index = 0

    return {
        next : function () {
            if(index < array.length){
                return {
                    value : array[index++],
                    done : false
                }
            }else{
                return{
                    value : "Iteration count exceeded",
                    done : true
                }
            }
        }
    }
}

let fruits = fruitIterator(array)

console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());