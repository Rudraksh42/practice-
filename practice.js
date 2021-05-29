  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDP7MPScYNZITsR9Kv1hLWJAiIntoMMHWE",
    authDomain: "kwitter-64ea2.firebaseapp.com",
    databaseURL: "https://kwitter-64ea2-default-rtdb.firebaseio.com",
    projectId: "kwitter-64ea2",
    storageBucket: "kwitter-64ea2.appspot.com",
    messagingSenderId: "492643810535",
    appId: "1:492643810535:web:9d6330c801611c6555b642"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  function addUSer(){
  var username
  username=document.getElementById("username").value;
  firebase.database().ref("/").child(username).update({
      purpose:"adding:user",
      uHaveBeenHAcked:"Hacked"
  });
  }