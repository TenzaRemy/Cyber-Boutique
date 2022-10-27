const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

function validateName() {
  const nameValid = document.getElementById("name").value;
  if(nameValid.length == 0){
    document.getElementById("name").style.borderColor = "red";
    document.getElementById("name").style.boxShadow = "inset 0 1px 1px red";
    document.getElementById("nameError").style.color = "red";
    nameError.innerHTML = 'Votre nom et prénom sont requis';
    return false;
  }
  if(!nameValid.match(/^[A-Za-z\é\è\ê\-]*\s{1}[A-Za-z\é\è\ê\-]*$/)) {
    document.getElementById("name").style.borderColor = "red";
    document.getElementById("name").style.boxShadow = "inset 0 1px 1px red";
    document.getElementById("nameError").style.color = "red";
    nameError.innerHTML = 'Chiffres et caractères spéciaux interdits';
    return false;
  }
  document.getElementById("name").style.borderColor = "#0cd577";
  document.getElementById("name").style.boxShadow = "inset 0 1px 1px #0cd577";
  document.getElementById("nameError").style.color = "green";
  nameError.innerHTML = 'Données saisies correct !';
  return true;
}

function validateEmail() {
  const emailValid = document.getElementById("email").value;
  if(emailValid.length == 0){
    document.getElementById("email").style.borderColor = "red";
    document.getElementById("email").style.boxShadow = "inset 0 1px 1px red";
    document.getElementById("emailError").style.color = "red";
    emailError.innerHTML = 'Veuillez saisir votre adresse mail';
    return false;
  }
  if(!emailValid.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    document.getElementById("email").style.borderColor = "red";
    document.getElementById("email").style.boxShadow = "inset 0 1px 1px red";
    document.getElementById("emailError").style.color = "red";
    emailError.innerHTML = "Votre adresse mail est invalide";
    return false;
  }
  document.getElementById("email").style.borderColor = "#0cd577";
  document.getElementById("email").style.boxShadow = "inset 0 1px 1px #0cd577";
  document.getElementById("emailError").style.color = "green";
  emailError.innerHTML = 'Adresse mail valide !';
  return true;
}

function validateArrive() {
  const arriveValid = document.getElementById("arrive").value;
  if(arriveValid.length == 0){
    document.getElementById("arrive").style.borderColor = "red";
    document.getElementById("arrive").style.boxShadow = "inset 0 1px 1px red";
    document.getElementById("arriveError").style.color = "red";
    arriveError.innerHTML = 'Veuillez nous dire comment êtes vous arrivez ici';
    return false;
  }
  if(!arriveValid.match(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/)) {
    document.getElementById("arrive").style.borderColor = "red";
    document.getElementById("arrive").style.boxShadow = "inset 0 1px 1px red";
    document.getElementById("arriveError").style.color = "red";
    arriveError.innerHTML = "Votre saisie comporte des caractères spéciaux ou est trop longue";
    return false;
  }
  document.getElementById("arrive").style.borderColor = "#0cd577";
  document.getElementById("arrive").style.boxShadow = "inset 0 1px 1px #0cd577";
  document.getElementById("arriveError").style.color = "green";
  arriveError.innerHTML = 'Information prise en compte !';
  return true;
}

function validateMessage() {
  const messageValid = document.getElementById("message").value;
  let minimum = 40;
  const reste = minimum - messageValid.length;

  if(reste > 0) {
    document.getElementById("message").style.borderColor = "red";
    document.getElementById("message").style.boxShadow = "inset 0 1px 1px red";
    document.getElementById("messageError").style.color = "red";
    messageError.innerHTML = reste + " caractères manquants";
    return false;
  }
  document.getElementById("message").style.borderColor = "#0cd577";
  document.getElementById("message").style.boxShadow = "inset 0 1px 1px #0cd577";
  document.getElementById("messageError").style.color = "green";
  messageError.innerHTML = 'Message bien pris merci !';
  return true;
}

function validateForm() {
  if(!validateName() || !validateEmail() || !validateArrive() || validateMessage()) {
    swal({
      title: "Erreur",
      text: "Une erreur est survenue. Veuillez vérifier vos données saisies dans le formulaire afin de pouvoir poursuivre.",
      icon: "error",
      button: "Fermer",
    })
  }
}

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
      document.getElementById("email").style.borderColor = "lightgreen",
      document.getElementById("arrive").style.borderColor= "lightgreen",
      document.getElementById("message").style.borderColor = "lightgreen",
      swal({
        title: "Demande envoyée",
        text: "Nous reviendrons vers vous dans les plus brefs délais",
        icon: "success",
        button: "Fermer",
      }).then(function() {
        window.location = "index.html";
    }),
    );
}