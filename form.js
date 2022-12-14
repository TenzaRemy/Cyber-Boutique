const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

function validateName() {
  const nameValid = document.getElementById("name").value;
  if(nameValid.length == 0){
    document.getElementById("name").style.borderColor = "red";
    document.getElementById("name").style.boxShadow = "inset 0 1px 1px red";
    document.getElementById("nameError").style.color = "red";
    document.getElementById("nameError").style.fontWeight = "500";
    nameError.innerHTML = 'Votre nom et prénom sont requis';
    return false;
  }
  if(!nameValid.match(/^[A-Za-z\é\è\ê\-]*\s{1}[A-Za-z\é\è\ê\-]*$/)) {
    document.getElementById("name").style.borderColor = "red";
    document.getElementById("name").style.boxShadow = "inset 0 1px 1px red";
    document.getElementById("nameError").style.color = "red";
    document.getElementById("nameError").style.fontWeight = "500";
    nameError.innerHTML = 'Chiffres et caractères spéciaux interdits';
    return false;
  }
  document.getElementById("name").style.borderColor = "#0cd577";
  document.getElementById("name").style.boxShadow = "inset 0 1px 1px #0cd577";
  document.getElementById("nameError").style.fontWeight = "500";
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
    document.getElementById("emailError").style.fontWeight = "500";
    emailError.innerHTML = 'Veuillez saisir votre adresse mail';
    return false;
  }
  if(!emailValid.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    document.getElementById("email").style.borderColor = "red";
    document.getElementById("email").style.boxShadow = "inset 0 1px 1px red";
    document.getElementById("emailError").style.color = "red";
    document.getElementById("emailError").style.fontWeight = "500";
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
    document.getElementById("arriveError").style.fontWeight = "500";
    arriveError.innerHTML = 'Veuillez nous dire comment êtes vous arrivez ici';
    return false;
  }
  if(!arriveValid.match(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/)) {
    document.getElementById("arrive").style.borderColor = "red";
    document.getElementById("arrive").style.boxShadow = "inset 0 1px 1px red";
    document.getElementById("arriveError").style.color = "red";
    document.getElementById("arriveError").style.fontWeight = "500";
    arriveError.innerHTML = "Votre saisie comporte des caractères spéciaux ou est trop longue";
    return false;
  }
  document.getElementById("arrive").style.borderColor = "#0cd577";
  document.getElementById("arrive").style.boxShadow = "inset 0 1px 1px #0cd577";
  document.getElementById("arriveError").style.color = "green";
  document.getElementById("arriveError").style.fontWeight = "500";
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
    document.getElementById("messageError").style.fontWeight = "500";
    messageError.innerHTML = reste + " caractères manquants";
    return false;
  }
  document.getElementById("message").style.borderColor = "#0cd577";
  document.getElementById("message").style.boxShadow = "inset 0 1px 1px #0cd577";
  document.getElementById("messageError").style.color = "green";
  document.getElementById("messageError").style.fontWeight = "500";
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
    document.getElementById("submit").style.backgroundColor = "red"
  }
}

function sendEmail() {
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
    })
}