document.getElementById("logOut").addEventListener("click", function () {
    window.location.href = "https://tanjidshafin.github.io/Nagad-Mobile-banking/login.html"
})
document.getElementById("TransferShower").addEventListener("click", function () {

    document.getElementById("Add_btn").innerText = "Transfer"


})
document.getElementById("addMoneyShower").addEventListener("click", function () {
    document.getElementById("Add_btn").innerText = "Add Money"
})
document.getElementById("cashOutShower").addEventListener("click", function () {
    document.getElementById("Add_btn").innerText = "Cash out"
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