(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.modal-trigger').leanModal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .6, // Opacity of modal background
    in_duration: 300, // Transition in duration
    out_duration: 200, // Transition out duration
  }
);


}); // end of document ready

})(jQuery); // end of jQuery name space

$(document).ready(function() {
  /*countdown based in jQuery.countdown (Bootstrap) http://hilios.github.io/jQuery.countdown/ */
  $('#clock').countdown('10/10/2016', function(event) {
      $(this).html(event.strftime('<div class="col l3 m3 s6"><span>%D</span> <h2>days</h2></div>  <div class="col l3 m3 s6"><span>%H</span> <h2>hours</h2></div> <div class="col l3 m3 s6"><span>%M</span> <h2>minutes</h2></div> <div class="col l3 m3 s6"><span>%S</span> <h2>Seconds</h2></div> '));
  });
  //BACKGROUND FULL SCREAM
  $.backstretch([
        "../img/background.jpg"
      , "../img/photo-1.jpg"
      , "../img/photo-2.jpg"
    ], {duration: 3000, fade: 750});
  // This command is used to initialize some elements and make them work properly
    $.material.init();
});
