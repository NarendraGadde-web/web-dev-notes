class Car {
    wheels = 3
    color = "blue"
    a = 10
    b= 1000
    c= 9837
    Accelerate() {
        console.log("Accelerating")
    }
    Brake() {
        console.log("Braking")
    }
    Start(){
        console.log("Starting")
    }
    Even(){
        x = 10
        y = x % 2 == 0
        console.log(y)
        var x = 10000
        let y = 10
        const z = 10                    
        x = "India"
        y = "USA"
    
        i = x + y // z = "IndiaUSA" concatenation
        j = z + x // z = "10India" concatenation
        typeof(y)
    }
}

const Santro = new Car()
const WargonR = new Car()
const swift = new Car()