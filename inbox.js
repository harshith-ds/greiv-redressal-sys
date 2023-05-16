const firebaseConfig = {
    apiKey: "AIzaSyCpmYG00SD6A-v3eSxvQ4RLSCYwkUNM2GA",
  authDomain: "webdev-46c60.firebaseapp.com",
  databaseURL: "https://webdev-46c60-default-rtdb.firebaseio.com",
  projectId: "webdev-46c60",
  storageBucket: "webdev-46c60.appspot.com",
  messagingSenderId: "414159662770",
  appId: "1:414159662770:web:4231ef9526df42a97ca3ab",
  measurementId: "G-GB8J08YNKT",
    
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    datapoint = document.getElementById('datapoint');
    test1 = document.getElementById('test1');

    const auth = firebase.auth();
    const database = firebase.database();
    //console.log(auth.currentUser.uid);

    const dbRef = firebase.database().ref();
dbRef.child("contactForm").once("value").then((snapshot) => {
  if (snapshot.exists()) {
    //console.log(snapshot.val());
    // test.innerHTML = snapshot.val().password;
    // test1.innerHTML = snapshot.val().email;
    snapshot.forEach((snap) => {
    //for(let snap in snapshot.val())
    //{
        console.log(snap.val());
        var testiDiv = document.createElement("div");
        testiDiv.className = "testimonials-box";
        var boxDiv = document.createElement("div");
        boxDiv.className = "box-top";
        var proDiv = document.createElement("div");
        proDiv.className = "profile";
        var imgDiv = document.createElement("div");
        imgDiv.className = "profile-img";
        var imgsrDiv = document.createElement("img");
        imgsrDiv.setAttribute("src","./userprofile.jpg");
        var nameDiv = document.createElement("div");
        nameDiv.className = "name-user";
        var nameStr = document.createElement("strong");
        //nameStr.className = "name-user";
        var nameSpa = document.createElement("span");
        //nameDiv.className = "name-user";
        var revDiv = document.createElement("div");
        revDiv.className = "reviews";
        var cliDiv = document.createElement("div");
        cliDiv.className = "client-comment";
        var stoP = document.createElement("p");
        //stoP.className = "name-user";

        nameStr.innerHTML = snap.val().queries;
        nameSpa.innerHTML = snap.val().querytype;
        nameSpa.innerHTML = snap.val().sem;
        nameSpa.innerHTML = snap.val().sol;


        imgDiv.appendChild(imgsrDiv);
        proDiv.appendChild(imgDiv);
        cliDiv.appendChild(stoP);
        testiDiv.appendChild(cliDiv);
        boxDiv.appendChild(revDiv);
        nameDiv.appendChild(nameStr);
        nameDiv.appendChild(nameSpa);
        proDiv.appendChild(nameDiv);
        boxDiv.appendChild(proDiv);
        testiDiv.appendChild(boxDiv);

        datapoint.appendChild(testiDiv);
    //}
    });
    
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});