function checkPassword() {
    var password = document.getElementById("password").value;

    if (password == "8823") {
        var images = document.getElementsByTagName("img");
        for (var i = 0; i < images.length; i++) {
            images[i].classList.add("show");
        }
        return false; // Prevent form submission
    } else {
        alert("Incorrect password!");
        return false; // Prevent form submission
    }
}
