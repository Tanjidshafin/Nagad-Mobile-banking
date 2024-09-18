const loginNumber = document.getElementById("login_number")
const loginPassword = document.getElementById("login_password")
document.getElementById("passwordShow").addEventListener("click", function () {
    if (loginPassword.type == "password") {
        loginPassword.type = "text"
    }
    else {
        loginPassword.type = "password"
    }
})
document.getElementById("login_btn").addEventListener("click", function (event) {
    event.preventDefault()
    if (loginNumber.value == "01715257080" && loginPassword.value == "1234k") {
        window.location.href = "https://tanjidshafin.github.io/Nagad-Mobile-banking/main.html"
    }
    else {
        alert("Wrong Number. Try again")
    }
})