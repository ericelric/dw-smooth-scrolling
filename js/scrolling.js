var $root = $('html, body'); //for increased performance, so that it doesn't run every single time an anchor is clicked
var speed = 300; //animation time in ms
var animation = 'linear'; //animation style 'linear' works without jQuery UI

//main function
$('a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, speed, animation);
    return false;
});

// helper functions just for the demonstration
$(".user").click(function() {
    animation = $(this).attr("data-name");
});

$("#ok").click(function() {
    speed = parseInt($('#input-field').val());
});
