
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAde3AmmQXoERTNWRcj2zStZ2l85Mu0Kpg",
      authDomain: "lets-chat-app-35c18.firebaseapp.com",
      projectId: "lets-chat-app-35c18",
      storageBucket: "lets-chat-app-35c18.appspot.com",
      messagingSenderId: "897372857001",
      appId: "1:897372857001:web:dc2ec77644c52f196c3fb8"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      function adduser(){
            user_name=document.getElementById("user_name").value;
            firebase.database().ref("/").child(user_name).update({
                purpose:"adding user"
            }); 
        }

      //End code
      });});}
getData();

