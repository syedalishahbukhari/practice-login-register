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
        firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    window.location.href = "./index.html"
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
    }

}