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
$('#search').on('click',search);



 function search(event){
  event.preventDefault();

  var location = $('#location').val();
  var event = $('#event').val();
  var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + event + "&apikey=jMH0oHQBw8sCR7SRnBKCRRoG6gn2I5S8";

  $.ajax({
      url: "http://104.200.17.235:8081/cors/",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({
      url: queryURL
      })
  }).then(function (response) {

      var data = JSON.parse(response);
      var eventArray = data._embedded.events;
      console.log(eventArray);
       
          for (var i= 0; i < eventArray.length; i++) {  
          var event = eventArray[i];
          var name = event.name;
          console.log(name);
          var ticketURL = event.url;
          console.log(ticketURL);
          var title = $(`<a href="${ticketURL}">${name}</a>`)                                                                 
          var eventDiv = $("<div class='name'>");
          eventDiv.append(title);
          $("#demo-api").append(eventDiv);
          }
          
  })
 
};


// API