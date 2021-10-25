function sendMail() {
    var link = "mailto:devhudsonfonseca@gmail.com"
        + "?bcc=hudsonvsf@gmail.com"
        + "&subject=" + escape("Let's fly together!")
        + "&body=" + escape(document.getElementById('message').value)
        ;

    window.location.href = link;
}

function sendMail2() {
    var link = "mailto:devhudsonfonseca@gmail.com"
        + "?bcc=hudsonvsf@gmail.com"
        + "&subject=" + escape("Let's code together!")
        + "&body=" + escape(document.getElementById('exampleFormControlTextarea1').value)
        ;

    window.location.href = link;
}


function sendMail3() {
    var link = "mailto:devhudsonfonseca@gmail.com"
        + "?bcc=hudsonvsf@gmail.com"
        + "&subject=" + escape("Let's code together!")
        + "&body=" + escape(document.getElementById('button-addon2').value)
        ;

    window.location.href = link;
}