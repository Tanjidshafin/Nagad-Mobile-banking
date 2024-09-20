const pinId = document.getElementById("pinId")
document.getElementById("logOut").addEventListener("click", function () {
    window.location.href = "https://tanjidshafin.github.io/Nagad-Mobile-banking/login.html"
})

document.getElementById("addMoneyBtn").addEventListener("click", function () {
    if (pinId.value != "1234k") {
        alert("Wrong Pin")
    }
    else {

        moneyIncreaser()
        alert(document.getElementById("amount").value + "tk added")
        const div = document.createElement("div")
        div.innerHTML = `
<p class="bg-gradient-to-l mx-8 text-white font-semibold p-3 mt-2 rounded-lg from-blue-500 to-cyan-300">
                            Amount Added ${document.getElementById("amount").value}Tk and
                            Available Balance ${document.getElementById("availableBalance").innerText}Tk</p> 
`
        document.getElementById("historyShowerBox").appendChild(div)
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
    document.getElementById("transectionPage").style.display = "none"
    cashOutInterface.style.backgroundColor = "#e2e8f0"
    addMoneyInterface.style.backgroundColor = "white"
    document.getElementById("dealingBox").style.display = "block"
})
addMoneyInterface.addEventListener("click", function () {
    document.getElementById("addMoneyBtn").style.display = "block"
    document.getElementById("cashOutBtn").style.display = "none"
    cashOutInterface.style.backgroundColor = "white"
    addMoneyInterface.style.backgroundColor = "#e2e8f0"
    document.getElementById("dealingBox").style.display = "block"
    document.getElementById("transectionPage").style.display = "none"
})
transectionsInterface.addEventListener("click", function () {
    document.getElementById("dealingBox").style.display = "none"
    document.getElementById("transectionPage").style.display = "block"
    cashOutInterface.style.backgroundColor = "white"
    addMoneyInterface.style.backgroundColor = "white"
    transectionsInterface.style.backgroundColor = "#e2e8f0"
})


document.getElementById("cashOutBtn").addEventListener("click", function () {
    if (pinId.value != "1234k") {
        alert("Wrong Pin!")
    }
    else {
        moneyDecreaser()
        alert(document.getElementById("amount").value + "Tk Sent")
        const div = document.createElement("div")
        div.innerHTML = `
<p class="bg-gradient-to-l mx-8 text-white font-semibold p-3 mt-2 rounded-lg from-blue-500 to-cyan-300">
                            Amount given ${document.getElementById("amount").value}Tk and
                            Available Balance ${document.getElementById("availableBalance").innerText}Tk</p> 
`
        document.getElementById("historyShowerBox").appendChild(div)
    }
})