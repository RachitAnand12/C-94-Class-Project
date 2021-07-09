var firebaseConfig = {
    apiKey: "AIzaSyAxNTmUC5UozbEdjlOiU7HRPAnAruuNYhc",
    authDomain: "kwitter-3bd0d.firebaseapp.com",
    databaseURL: "https://kwitter-3bd0d-default-rtdb.firebaseio.com",
    projectId: "kwitter-3bd0d",
    storageBucket: "kwitter-3bd0d.appspot.com",
    messagingSenderId: "434581893437",
    appId: "1:434581893437:web:5c6dbbb3f64f0b581d1554"
  };
  firebase.initializeApp(firebaseConfig);

  //code to create a main folder in the database

  function addRoom() {
      //get the rooom name given by the user in the input

      roomName = document.getElementById("room_input").value

      //firebase - is used to set the reference for adding data to the database
      //database() - means we want to add data to the database.
      //- ref() means the reference, where we want to add
      //  “/” - this means we want to add the room name in the root as the main folder.
      //child() function is used to give the name to the main folder
      //update - is the firebase function used to update the database with the values.

      firebase.database().ref("/").child(roomName).update({
          // key: "value"
          username : "rachit"
      })
  }