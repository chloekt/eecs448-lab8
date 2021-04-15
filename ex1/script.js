function valPW(){
  let pass1 = document.querySelector("#pw1").value;
  let pass2 = document.querySelector("#pw2").value;
  if(pass1 != pass2){
    alert("Passwords dont match!");
  }
  else if(pass1.length < 8){
    alert("password not long enough!");
  }
  else if(pass1 == pass2){
    alert("Passwords match!");
  }
}
