function visiblePass(passWordShowerId) {
    if (document.getElementById(passWordShowerId).type == "password") {
        document.getElementById(passWordShowerId).type = "text"
    }
    else {
        document.getElementById(passWordShowerId).type = "password"
    }
}