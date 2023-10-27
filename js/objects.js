Santro = {
    wheels : 3,
    color : "blue",
    Accelerate : function(){
        console.log("Accelerating")
    },
    Brake : function(){
        console.log("Braking")
    },
    Start : function(){
        console.log("Starting")
    },
}

Swift = {
    wheels : 4,
    color : "red",
    Accelerate : function(){
        console.log("Accelerating")
    },
    Brake : function(){
        console.log("Braking")
    },
    Start : function(){
        console.log("Starting")
    },
}

Santro.color
Santro.Accelerate()


Swift.color = "green"
Swift.Brake()

