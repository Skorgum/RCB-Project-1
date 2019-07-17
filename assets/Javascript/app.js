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
$(document).on('click','#search',search);




 function search(e){

  e.preventDefault();

  $('.event-row').remove();

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
    }).then(function (response){

        var data = JSON.parse(response);
        var eventArray = data._embedded.events;
        console.log(eventArray);
        
        for (var i= 0; i < eventArray.length; i++) {  
          var event = eventArray[i];
          var name = event.name;
          var imgURL = event.images[0].url
          var ticketURL = event.url;
          var city = event._embedded.venues[0].city.name;
          function weather(){// weather data for each event location
            $.ajax({
              url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" +
                    "&APPID=1b7d73dc9e11e1001798c791a1226534",
              type: "GET",
              }).then(function(response){
                 console.log(response)
                })
          };
          weather();                                                               
          var eventsDiv = $('<div class="events">');
          var eventDiv = 
          $(`<div class="row event-row">
                <div class="col-md-2">
                  <img src="${imgURL}" width="100" height="100">
                </div>
                <div class="col-md-10">
                  <div class"card">
                    <div class="card-body">
                      <h5 class="card-title"><a href="${ticketURL}" target="_blank">${name}</a></h5>
                      <p class ="card-text">Some quick example text to build on the card title and make</p>
                      <a href="${ticketURL}" id="tickets" class="btn" target="_blank">Tickets</a>
                    </div>
                </div>
              </div>`)
              $(eventsDiv).append(eventDiv);
              $('#events').append(eventsDiv);
        }          
    })
};



  // function weather(){
  //   var city = $("#location").val();
  //   $.ajax({
  //     url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" +
  //           "&APPID=1b7d73dc9e11e1001798c791a1226534",
  //     type: "GET",
  //     }).then(function(response){
  //         console.log(response)
  //         console.log('weather')
  //       })
  
  // };

// function showWeather(data){
 

//          <h3><strong>Description</strong>: "+ data.weather[0].description +"</h3>" +
//          "<h3><strong>Temperature</strong>: "+ data.main.temp +"</h3>" +

//  }