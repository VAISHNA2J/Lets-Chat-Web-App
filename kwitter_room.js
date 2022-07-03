var firebaseConfig = {
    apiKey: "AIzaSyBjiwuE4WggME1SvQ6PX2VnKGG0gnCDpKY",
    authDomain: "let-s-chat-web-app-e9cd3.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-e9cd3-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-e9cd3",
    storageBucket: "let-s-chat-web-app-e9cd3.appspot.com",
    messagingSenderId: "794598441748",
    appId: "1:794598441748:web:cf8003c7860e302acbb801"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addRoom()
  {
      room_name = document.getElementById("room_name").value;
      localStorage.setItem('room_name', room_name);
      firebase.database().ref("/").child(room_name).update({
        purpose: "adding room"
    });
  }