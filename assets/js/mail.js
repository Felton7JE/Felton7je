function sendMail(){

    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_d3lkz3d", "template_6en13hz", parms).then(function (res) {
        console.log(res);
        alert("Email enviado com sucesso!");
    })

}