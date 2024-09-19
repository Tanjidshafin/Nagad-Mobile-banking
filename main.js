document.getElementById("logOut").addEventListener("click", function () {
    window.location.href = "https://tanjidshafin.github.io/Nagad-Mobile-banking/login.html"
})
document.getElementById("TransferShower").addEventListener("click", function () {

    


})
document.getElementById("addMoneyShower").addEventListener("click", function () {
     document.getElementById("out_btn").style.display="none"
    document.getElementById("Add_btn").style.display="block"
})

document.getElementById("Add_btn").addEventListener("click", function (event) {
    event.preventDefault()
    if (document.getElementById("add_password").value == "1234k") {
        let availableBalance = document.getElementById("availableBalance")
        const addNumber = document.getElementById("add_number")
        let availBal = parseFloat(availableBalance.innerText)
        let addMoney = parseFloat(addNumber.value)
        availableBalance.innerText = availBal + addMoney
        alert(addMoney + " " + "Tk added")
    }
    else {
        alert("wrong pin")
    }
})
document.getElementById("cashOutShower").addEventListener("click", function () {
    document.getElementById("out_btn").style.display="block"
    document.getElementById("Add_btn").style.display="none"
})
document.getElementById("out_btn").addEventListener("click", function (event) {
    event.preventDefault()
    if (document.getElementById("add_password").value == "1234k") {
        let availableBalance = document.getElementById("availableBalance")
        const addNumber = document.getElementById("add_number")
        let availBal = parseFloat(availableBalance.innerText)
        let addMoney = parseFloat(addNumber.value)
        availableBalance.innerText = availBal - addMoney
        alert(addMoney + " " + "Tk Cash Outed")
    }
    else {
        alert("wrong pin")
    }
})