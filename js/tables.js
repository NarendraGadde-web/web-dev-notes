let gentables = () => {
    let num = document.getElementById("num").value
    let para = document.getElementById("res")
    for (let i = 1;i<=10;i++){
        para.innerText += num + "X" + i + "=" + num*i + "\n"
    }
}