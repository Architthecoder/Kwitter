var firebaseConfig = {
      apiKey: "AIzaSyCosrnnJTToCDsy5phx9DUtdoGz9O6DWtY",
      authDomain: "kwittertest-3d608.firebaseapp.com",
      databaseURL: "https://kwittertest-3d608-default-rtdb.firebaseio.com",
      projectId: "kwittertest-3d608",
      storageBucket: "kwittertest-3d608.appspot.com",
      messagingSenderId: "934054664053",
      appId: "1:934054664053:web:347169b42b4593db64253c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
let user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerText = "Welcome " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+ Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}