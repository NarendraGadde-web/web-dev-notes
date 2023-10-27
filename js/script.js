function myFunction(){
    let h1 = document.querySelector("h1");
    let p = document.querySelector("p")
    h1.style.color = "red";
    p.style.color = "blue";
    h1.style.border = "10px solid red";
}
function myReset(){
    document.querySelector("h1").style.color = "black";
    document.querySelector("p").style.color = "black";
}
function hideEverything() {
    document.querySelector("h1").style.display = "none";
    document.querySelector("p").style.display = "none";
}
function showEverything() {
    document.querySelector("h1").style.display = "block";
    document.querySelector("p").style.display = "block";
}
