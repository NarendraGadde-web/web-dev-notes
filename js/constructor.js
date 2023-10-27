class Animal {
    constructor(l, c){
        this.legs = l
        this.breathe = "Oxygen"
        this.category = c
    }
    eat(){
        console.log("Eating")
    }
    sleep(){
        console.log("sleeping")
    }
}
const Monkey = new Animal(4)
const Spider = new Animal(8, "Insect")
console.log(Monkey.category)
console.log(Spider.breathe)
const d = new Date()
console.log(d)