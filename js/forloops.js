let forin = () => {
    z = ["Banana", "Apple", "Orange", "Pineapple", "msiub"]
    console.log(z)
    for (let i in z){
        console.log("Element = "+ z[i])
    }
}

let forof = () => {
    z = ["Banana", "Apple", "Orange", "Pineapple", "msiub"]
    console.log(z)
    for (let i of z){
        console.log("Element = "+ i)
    }
}