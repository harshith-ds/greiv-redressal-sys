const firebaseConfig = {
  apiKey: "AIzaSyCpmYG00SD6A-v3eSxvQ4RLSCYwkUNM2GA",
  authDomain: "webdev-46c60.firebaseapp.com",
  databaseURL: "https://webdev-46c60-default-rtdb.firebaseio.com",
  projectId: "webdev-46c60",
  storageBucket: "webdev-46c60.appspot.com",
  messagingSenderId: "414159662770",
  appId: "1:414159662770:web:4231ef9526df42a97ca3ab",
  measurementId: "G-GB8J08YNKT"
};
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
    var sol= getElementVal("sol");
  
    saveMessages(name, emailid, msgContent,sol);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent,sol) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      querytype: name,
      sem: emailid,
      queries: msgContent,
      sol:sol,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };