let func = () => alert("This is a new alert!");

function clicked(){
    alert("This is a new alert!");
}


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
    function clicked(){
        alert("This is a new alert!");
    }
    let func = () => alert("This is a new alert!");
    func()

}

clicked()

let newfunc = () => {
    let agecheckerarrow = () => {
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
    let func = () => alert("This is a new alert!");
    func()
}


const Person = {
    firstName:"ABC",
    lastName:"DEF",
    id:6789,
    fullName : function() {
        return this.firstName + " " + this.lastName
    }
}
