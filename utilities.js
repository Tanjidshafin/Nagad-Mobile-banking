function visiblePass(passWordShowerId) {
    if (document.getElementById(passWordShowerId).type == "password") {
        document.getElementById(passWordShowerId).type = "text"
    }
    else {
        document.getElementById(passWordShowerId).type = "password"
    }
}

function moneyIncreaser() {
    let typeOfBalance = parseFloat(document.getElementById("availableBalance").innerText)
    let typeOfamount = parseFloat(document.getElementById("amount").value)
    let calculation = typeOfBalance + typeOfamount
    document.getElementById("availableBalance").innerText = calculation.toString()
}
function moneyDecreaser() {
    let typeOfBalance = parseFloat(document.getElementById("availableBalance").innerText)
    let typeOfamount = parseFloat(document.getElementById("amount").value)
    let calculation = typeOfBalance - typeOfamount
    document.getElementById("availableBalance").innerText = calculation.toString()
}