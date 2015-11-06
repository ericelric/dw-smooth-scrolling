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
function updateEffectText(){
	$('.dropdown-toggle').html(animation + ': ' + speed + ' ms' + ' <span class="caret"></span>');
}

$(".user").click(function() {
    animation = $(this).attr("data-name");
   	updateEffectText();

});

$("#ok").click(function() {
    speed = parseInt($('#input-field').val());
    updateEffectText();
});

$( document ).ready(function() {
    updateEffectText();
});

