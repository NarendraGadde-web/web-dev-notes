let whileLoop = () => {
    let i = 1
    while ( i<=10 ){
        console.log("N : "+ i)
        i = i + 1
    }
    console.log("End")
}
let doLoop = () => {
    let i = 11
    do {
        console.log("N : "+ i)
        i = i + 1
    }while ( i<=10 )
    console.log("End")
}
let forLoop = () => {
    let i = 5
    for(let i = 1; i<=10 ;i++){
        console.log("N : "+ i)
    }
    console.log(i)
}


let withoutLoops = () => {
    console.log(1)
    console.log(2)
    console.log(3)
    console.log(4)
    console.log(5)
    console.log(6)
    console.log(7)
    console.log(8)
    console.log(9)
    console.log(10)
    console.log("End")
}