$(document).ready(function() {
    $('.btn').click(function(event) {
        $('.nav_burger, .btn').toggleClass('active');
        $('body').toggleClass('lock');
    })
    $('.nav_text a').click(function(event) {
        $('.nav_burger').toggleClass('active');
        $('body').toggleClass('lock');
    })
})