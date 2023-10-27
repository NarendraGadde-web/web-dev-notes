let countries = ["India", "USA", "UK"]
let numbers = [90,1,2,56.78]
let combined = [countries, numbers]
let newcom = [combined, numbers]
for (let i of newcom){
    for (let j of i){
        console.log(j)
    }
}
console.log(newcom[0][0][1])
console.log(countries.length)
countries.push("Nepal") // unshift()
console.log(countries.toString())
countries.pop() // shift()
console.log(countries.toString())
const full = countries.concat(numbers)
console.log(full.toString())
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(1,5))

