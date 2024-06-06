const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}

function emailSend() {

    var username = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var messageBody = "Name " + username +
        "<br/> email " + email +
        "<br/> message " + message;


    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "zineb@gmail.com",
        Password: "262D54B50A86824EFD606EC80503F92B99BF",
        To: 'zinebelmalki0602@gmail.com',
        From: "zinebelmalki0602@gmail.com",
        Subject: "This is the subject",
        Body: messageBody
    }).then(
        message => {
            if (message == 'OK') {
                swal({
                    title: "success",
                    text: "Message envoyé!",
                    icon: "success",
                });
            }
            else {
                swal({
                    title: "Erreur",
                    text: "Message non envoyé!",
                    icon: "error",
                });

            }
        }
    );
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'fr', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element');
}


