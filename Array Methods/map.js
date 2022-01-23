"use strict"

// Map Method

const productsOriginal = [
    {name: "iPhone 12", price: 1269},
    {name: "Macbook Pro M1", price: 1449},
    {name: "iPad Pro", price: 989},
    {name: "iMac 2021", price: 1669}
]

const productsSale = productsOriginal.map(product => {
    if(product.price > 1000){
        return {name: product.name, price: product.price / 1.25}
    } else {
        return product
    }
})

console.log("Ceny po zľave:", productsSale,"Ceny pred zľavou:", productsOriginal)

// Simple example

const sums = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const newSum = sums.map(sum => sum + '€');
console.log(newSum);