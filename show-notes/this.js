//Introduction to the 'this' Keyword in JavaScript


$('.btn-guide').click(function(event) {
    event.preventDefault();
    console.log($(this));
});