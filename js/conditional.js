function ageChecker(){
    let num = document.getElementById("age")
    let ans = document.getElementById("answer")
    voting_age = 18

    if (num.value >= voting_age) {
        ans.innerText = "Eligible"
        ans.style.backgroundColor = "green"
    }
    
    else{
        ans.innerText = "Too young"
        ans.style.backgroundColor = "red"
    }

    
}
console.log(num)
function oddeve(){
    let num = document.getElementById("num").value
    let res = document.getElementById("result")
    if (num == 0) {
        res.innerText = "Zero"
    }
    else if(num < 0){
        res.innerText = "Negative"
        if(num % 2 == 0){
            res.innerText += " Even"
        }
        else {
            res.innerText += " Odd"
        }
    }
    else if(num > 2){
        res.innerText = "Positive"
        if(num % 2 == 0){
            res.innerText += " Even"
        }
        else {
            res.innerText += " Odd"
        }
    }
}
function dayChecker(){
    let day = new Date().getDay()
    let res = document.getElementById("day")
    if (day == 0) {
        res.innerText = "Sun"
    }
    else if(day == 1){
        res.innerText = "Mon"
    }
    else if(day == 2){
        res.innerText = "Tues"
    }
    else if(day == 3){
        res.innerText = "Wed"
    }
    else if(day == 4){
        res.innerText = "Thurs"
    }
    else if(day == 5){
        res.innerText = "Fri"
    }
    else{
        res.innerText = "Sat"
    }
}
function dayCheckerSwitch(){
    let day = new Date().getDay()
    let res = document.getElementById("day")
    switch (day){
        case 0:
            res.innerText = "Sun"
            break
        case 1:
            res.innerText = "Mon"
            break
        case 2:
            res.innerText = "Tues"
            break
        case 3:
            res.innerText = "Wed"
            break
        case 4:
            res.innerText = "Thurs"
            break
        case 5:
            res.innerText = "Fri"
            break
        case 6:
            res.innerText = "Sat"
            break
    }
}


function func(){
    let h1 = document.getElementById("h1")
    h1.innerText = "Added by JS"
}

