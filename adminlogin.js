function signIn(){
    var userSIEmail = document.getElementById("email").value;
    var userSIPassword = document.getElementById("password").value;
   

   
        firebase.auth().signInWithEmailAndPassword(userSIEmail, userSIPassword).then((success) => {
          window.location.replace("./inbox.html");
            
            
           
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            window.location.replace("./failed.html");
            
        });
    }
//         function signup() {
//             console.log("1");
//             email = document.getElementById('email').value;
//             password = document.getElementById('password').value;
//             firebase.auth().createUserWithEmailAndPassword(email, password)
//             .then((userCredential) => {
//               // Signed in 
//               var user = userCredential.user;
//               console.log(user.uid);
//               firebase.database().ref('admins/' + user.uid).set({
//                 email: email,
//                 password: password,
//                 isAdmin: true
//               });
//               // ...
//               alert("COmpleted");
//             })
//             .catch((error) => {
//               var errorCode = error.code;
//               var errorMessage = error.message;
//               // ..
//             });
//         console.log(email);
//         console.log(password);
    
//         }
// }
// function signup() {
//     console.log("1");
//     email = document.getElementById('email').value;
//     password = document.getElementById('password').value;
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       // Signed in 
//       var user = userCredential.user;
//       console.log(user.uid);
//       firebase.database().ref('student/' + user.uid).set({
//         email: email,
//         password: password,
//         isAdmin: false
//       });
//       // ...
//       alert("COmpleted");
//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // ..
//     });
// console.log(email);
// console.log(password);

 