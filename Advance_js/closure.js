/*
closure is a bundles of functions surrounded with their lexical scope
*/

function parent(){
    let score = 40
    return function child(){
        score = score + 1
        return score
    }
}

let result = parent()
console.log(result());




function grandParent(){
    let num1 = 20
    return function parent(){
        let num2 = 30
        return function child(){
            let num3 = 40
            return num1*num2*num3
        }
    }
}

let totalResult = grandParent()()()
console.log(totalResult);