// $( document ).ready(function() {
//     console.log( "ready!" );
//     var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?stateCode=NY&apikey=jMH0oHQBw8sCR7SRnBKCRRoG6gn2I5S8"; 

//     $.ajax({
//         url: 'https://cors-anywhere.herokuapp.com/' + queryURL,
//         headers: { 'X-Requested-With': 'XMLHttpRequest' },
//         method: "GET",
//         contentType: "application/json",
//     }).then(function (response){
//         var data = response;
//         var eventArray = data._embedded.events;
        
//         for (var i= 0; i < eventArray.length; i++) { 
//             var event = eventArray[i];
//             var name = event.name;
//             var imgURL = event.images[0].url
//             var ticketURL = event.url;
//             var city = event._embedded.venues[0].city.name;
//             var eventDiv = 
//                 $(`<div class="row event-row">
//                     <div class="col-md-2">
//                         <img class="event-image" src="${imgURL}" width="100" height="100">
//                     </div>
//                     <div class="col-md-10">
//                         <div class"card">
//                             <div class="card-body">
//                                 <h5 class="card-title"><a href="${ticketURL}" target="_blank">${name}</a></h5>
//                                 <p class ="card-text">Some quick example text to build on the card title and make</p>
//                                 <a href="${ticketURL}" id="tickets" class="btn" target="_blank">Tickets</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>`)
                
//                 $('#events').append(eventDiv);
//               }           
//             })
//     })

        
              
