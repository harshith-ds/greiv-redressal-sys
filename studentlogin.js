function signIn(){
    var userSIEmail = document.getElementById("email").value;
    var userSIPassword = document.getElementById("password").value;
   

   
        firebase.auth().signInWithEmailAndPassword(userSIEmail, userSIPassword).then((success) => {
            window.location.replace("./homepage.html");
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            window.location.replace("./failedstudent.html");
            
        });
    
}