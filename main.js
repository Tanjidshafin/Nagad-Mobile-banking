const pinId = document.getElementById("pinId")

document.getElementById("addMoneyBtn").addEventListener("click", function () {
    if (pinId.value != "1234k") {
        alert("Wrong Pin")
    }
    else {

        moneyIncreaser()
        alert(document.getElementById("amount").value + "tk added")
    }
})


document.getElementById("passVisibler").addEventListener("click", function () {
    if (pinId.type == "password" && document.getElementById("passVisibler").innerText == "Show") {
        pinId.type = "text"
        document.getElementById("passVisibler").innerText = "Hide!"
    }
    else {
        pinId.type = "Password"
        document.getElementById("passVisibler").innerText = "Show"
    }
})
const addMoneyInterface = document.getElementById("addMoneyInterface")
const cashOutInterface = document.getElementById("cashOutInterface")
const transectionsInterface = document.getElementById("transectionsInterface")

cashOutInterface.addEventListener("click", function () {
    document.getElementById("addMoneyBtn").style.display = "none"
    document.getElementById("cashOutBtn").style.display = "block"
    cashOutInterface.style.backgroundColor = "#e2e8f0"
    addMoneyInterface.style.backgroundColor = "white"
})
document.getElementById("cashOutBtn").addEventListener("click", function () {
    if (pinId.value != "1234k") {
        alert("Wrong Pin!")
    }
    else {
        moneyDecreaser()
        alert(document.getElementById("amount").value+"Tk Sent")
    }
})