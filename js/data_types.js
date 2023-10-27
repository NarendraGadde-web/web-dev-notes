//data types
// 1. number - 10, 10.5, 10+5i
// 2. string - "India", 'USA', `India is my country`
// 3. boolean - true, false , x = true
// 4. undefined - x = undefined
// 5. null - x = null
// 6. Bigint - x = 10000000
// 7. Symbol - x = Symbol("India")
// 8. Object - 
x = {
    name: "India", 
    population: 1000000000
}

y = ["India", "USA", "UK", "France"]
z = ["Banana", "Apple", "Orange"]
y[0] // "India"
y[1] = "United States of America" 
y.push("Mexico")
y.pop()
delete y[2]


y.concat(z) // ["India", "USA", "UK", "France", "Banana", "Apple", "Orange"]
