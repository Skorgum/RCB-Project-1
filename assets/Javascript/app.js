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
  var dataRef = firebase.database();
  var name = "";
  var email = "";
  $("#btn btn-primary").on("click", function(event) {
    event.preventDefault();

    
    name = $("#inputName").val().trim();
    email = $("#inputEmail").val().trim();
  

    // Code for the push
    dataRef.ref().push({

      name: name,
      email: email,
      
  });
// global variables

// onclick event for search
$(document).on('click','#search',search);



 function search(e){
  e.preventDefault();

  var location = $('#location').val();
  var event = $('#event').val();
  var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + event + "&apikey=jMH0oHQBw8sCR7SRnBKCRRoG6gn2I5S8";

  $.ajax({
      url: 'https://cors-anywhere.herokuapp.com/' + queryURL,
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
      method: "GET",
      contentType: "application/json",

  }).then(function (response) {
      console.log(response)

      var data = response;
      var eventArray = data._embedded.events;
      console.log(eventArray);
       
          for (var i= 0; i < eventArray.length; i++) {  
            var event = eventArray[i];
            var name = event.name;
            var imgURL = event.images[0].url
            var img = $(`<img src="${imgURL}" width="100" height="100">`)
            console.log(name);
            var ticketURL = event.url;
            console.log(ticketURL);
            var title = $(`<a href="${ticketURL}">${name}</a>`)                                                                 
            var eventsDiv = $('<div class="events">');
            var eventDiv = 
            $(`<div class="row event-row">
                  <div class="col-md-2">
                  <img src="${imgURL}" width="100" height="100">
                  </div>
                  <div class="col-md-10">
                    <div class"card">
                      <div class="card-body">
                        <h5 class="card-title"><a href="${ticketURL}">${name}</a></h5>
                        <p class ="card-text">Some quick example text to build on the card title and make</p>
                        <a href="${ticketURL}" id="tickets" class="btn">Tickets</a>
                      </div>
                  </div>
                </div> 
              `)
            // eventDiv.append(title);
            $(eventsDiv).append(eventDiv);
            $('#events').append(eventsDiv);

            // $('#demo-api').append(img);
          }
          
  })
 
};


// API