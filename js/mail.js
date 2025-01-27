function sendEmail() {
    let name = document.getElementById ('name').value;
    let email = document.getElementById ('email').value;
    let subject = document.getElementById ('subject').value;
    let message = document.getElementById ('message').value;
    let form = document.getElementById ('form');


emailjs.send("service_p11mqss","template_80aykgl",{
    name,
    email,
    subject,
    message,
    });

    form.reset();
}
