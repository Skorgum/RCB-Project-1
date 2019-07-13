console.log("(⌐■_■)");

// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCCJzvIcPUPTcn5jsc1T727-OWc3AittmM",
    authDomain: "event-meta-search.firebaseapp.com",
    databaseURL: "https://event-meta-search.firebaseio.com",
    projectId: "event-meta-search",
    storageBucket: "",
    messagingSenderId: "650900915826",
    appId: "1:650900915826:web:919356c789cac91a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// global variables

// onclick event for search
$('#search').on('click',function(event){
  event.preventDefault()
  console.log("click");
})

// API