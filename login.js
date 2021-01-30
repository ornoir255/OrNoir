function required() {
var nom = document.getElementById("nom").value;
var password = document.getElementById("password").value;

if(nom== "") {
alert("Veuillez insérer votre Nom");

document.getElementById("nom").focus();
return false;
}
if(password == "") {
alert("Veuillez insérer votre password");

document.getElementById("password").focus();
return false;
}
}
