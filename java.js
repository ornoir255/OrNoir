function requiredElement() {
var nom = document.getElementById("nom").value;
var prenom = document.getElementById("prenom").value;
var email = document.getElementById("email").value;
var date = document.getElementById("date").value;
var password = document.getElementById("password").value;

if(nom== "") {
alert("Veuillez insérer votre Nom");
document.getElementById("nom").style.backgroundColor="#F5A425";
document.getElementById("nom").focus();
//nom.focus();
return false;
}
if(prenom == "") {
alert("Veuillez insérer votre Prénom");
document.getElementById("prenom").style.backgroundColor="#F5A425";
document.getElementById("prenom").focus();
return false;
}

if(date == "") {
alert("Veuillez insérer votre date de naissance");
document.getElementById("date").style.backgroundColor="#F5A425";
document.getElementById("date").focus();
return false;
}
if(email == "") {
alert("Veuillez insérer votre Email");
document.getElementById("email").style.backgroundColor="#F5A425";
document.getElementById("email").focus();
return false;
}

if(password == "") {
alert("Veuillez insérer votre mot de passe");
document.getElementById("password").style.backgroundColor="#F5A425";
document.getElementById("password").focus();
return false;
}


return true;
}
function nomValidate() { 

var letters = /^[A-Za-z]+$/;
var nom = document.getElementById("nom");
if(nom.value.match(letters)) {
document.getElementById("nom").style.backgroundColor="white";
return true;
} else {
alert('Le nom ne doit contenir que des lettres');
document.getElementById("nom").style.backgroundColor="#F7D467";
document.getElementById("nom").focus();
return false;
}
}
function prenomValidate() { 

var letters = /^[A-Za-z]+$/;
var prenom = document.getElementById("prenom");
if(prenom.value.match(letters)) {
document.getElementById("prenom").style.backgroundColor="white";
return true;
} else {
alert('Le prénom ne doit contenir que des lettres');
document.getElementById("prenom").style.backgroundColor="#F7D467";
document.getElementById("prenom").focus();
return false;
}
}
function validateEmail(champsText){
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(champsText.value.match(mailformat)){
document.form.email.focus();
document.getElementById("email").style.backgroundColor="white";
return true;
}else{
alert("Veuillez insérer une adresse email valide!");
document.getElementById("email").style.backgroundColor="#F7D467";
document.form.email.focus();
return false;
}
}
function validateForm(){
if (!requiredElement()){
return false;
}
else{
confirm("Toutes les données sont validées !, Voulez-vous les envoyer au serveur?");
}
}
function validated(){
	var NOM = document.forms['login']['username'];
	var password = document.forms['login']['password'];

	var user-error = document.getElementById('user-error');
	var pass-error = document.getElementById('pass-error');
 if (email.value.legth < 9) {
 	email.style.border = "1px solid red";
 	user-error.style.display = "block";
 	email.focus();
 	return false;
 }
}
