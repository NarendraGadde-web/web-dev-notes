function clicked(){
    alert("This is a new alert!");
}

function keyDown(){
    let text = document.getElementById("textinput")

    let para = document.getElementById("result")
    para.innerHTML += text.value
    para.style.color = "red"
    para.style.backgroundColor = "lightblue"
}