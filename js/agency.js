/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin

$( document ).ready(function() {
  loadEventsFromMeetup();
  //loadEventsFromEventBrite();
});


function loadEventsFromMeetup() {
  var url = 'https://api.meetup.com/2/events?&sign=true&photo-host=public&group_urlname=seattle-pyladies&status=upcoming&page=6&key=5350685a4d783d675e4927440431a6c'

  // var url = 'https://api.meetup.com/events?&sign=true&photo-host=public&group_urlname=seattle-pyladies&page=20&key=5350685a4d783d675e4927440431a6c';

  $.ajax({ url: url,
    crossDomain: true,
    jsonp: "callback",
    dataType: "jsonp"
  }).success(function(data) {
    if (data.results.length == 0) {
      $('#eventList').html("No upcoming workshops scheduled.  Contact us to recommend a topic!");
    }else{
      console.log(data.results);


      for (i = 0; i < data.results.length; i++) {
        var humanTime = new Date(data.results[i].time)
        $('.event-row').append('<div class="col-md-2 col-sm-6 get-involved-item"><a href="'+data.results[i].event_url+'" target=blank class="get-involved-link"> <div class="get-involved-hover"> <div class="get-involved-hover-content"> <i class="fa fa-calendar fa-3x"></i> </div> </div> <img src="img/pylady.jpeg" class="img-responsive img-circle" alt=""> </a> <div class="get-involved-caption"> <h6>'+data.results[i].name+humanTime+'</h6> <p class="text-muted"></p></div> </div>')


        }

      }
    });
  }

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
