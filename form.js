
function sendEmail() {
    Email.send({
        SecureToken : "ad1fd59a-1d59-4f81-ac44-7ad9cf9c25fa",
        Host : "smtp.elasticemail.com",
        Username : "remy.dufour.etudiant@gmail.com",
        Password : "941266DE3C96C017BAD1090B327FE012594C",
        To : 'remy.dufour.etudiant@gmail.com',
        From : "remy.dufour.etudiant@gmail.com",
        Subject : "Cyber-Boutique",
        Body :  "Nom : " + document.getElementById("name").value +
                "<br />Email : " + document.getElementById("email").value +
                "<br />Ou : " + document.getElementById("arrive").value +
                "<br />Message : " + document.getElementById("message").value
    }).then(
      message => console.log(message),
      document.getElementById("submit").style.backgroundColor = "green",
      document.getElementById("name").style.borderColor = "lightgreen",
      document.getElementById("email").style.borderColor = "lightgreen",
      document.getElementById("arrive").style.borderColor= "lightgreen",
      document.getElementById("message").style.borderColor = "lightgreen",
      swal("Votre demande à bien était envoyé. Je vous recontacter dans les plus brèves délais. Merci pour votre confiance"),
    );
}