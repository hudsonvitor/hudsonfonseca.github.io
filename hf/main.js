var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

function sendMail() {
    var link = "mailto:hfinnovative@gmail.com"
        + "?cc=hudsonbyuk@gmail.com"
        + "&subject=" + escape("Request from website")
        + "&body=" + escape(document.getElementById('message').value)
        ;

    window.location.href = link;
}