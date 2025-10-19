let button = () =>
{
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    if(email === "" || password === "")
    {
  Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Fill the inputs",
  
});
    }else
    {
        
        firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    Swal.fire({
  title: "Good job!",
  text: "User register",
  icon: "success"
});
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorCode + errorMessage)
  });
    }

}