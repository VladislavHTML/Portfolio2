$(document).ready(function(){
$('.burger').click(function(event) {
$('.header-menu,.open').toggleClass('active');
$('body').toggleClass('lock');
});
});