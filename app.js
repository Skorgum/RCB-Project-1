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



 function search(e){
  e.preventDefault();

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
          var eventTitle = event.name;
          var imgURL = event.images[0].url
          var TicketMaster = event.url;                                                              
          var eventsSection = $('<section class="row events">');
          var eventDiv = 
          // eventDiv includes image of event with info to the right set in a card
          $(`<div class="col-sm-12 col-md-2">
                <img src="${imgURL}>
            </div>
            <div class="col-md-10 col-sm-12">
              <div class"card">
                <div class="card-body">
                  <h5 class="card-title"><a href="${TicketMaster}">${eventTitle}</a></h5>
                  <p class ="card-text">Some quick example text to build on the card title and make</p>
                  <a href="${TicketMaster}" id="tickets" class="btn">Tickets</a>
                </div>
              </div>
            </div>`);

            $(eventsSection).append(eventDiv);
            $('#events-list').append(eventsSection);
          }
          
  })
 
};


// API