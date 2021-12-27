"use strict"

const fibonacci = (n) => {

    const result = [0, 1]; 
    
    for (let i = 2; i <= n; i++) {

        const x = result[i - 1] 
        const y = result[i - 2]

        result.push(x + y)
    }
    
    return result
}

const calculation = fibonacci(8);
console.log(calculation)