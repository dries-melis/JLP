
// if there is clicked on the div then he's gonna look if the click was on the button
$('div.outer-container').on('click', 'button', function () {
  $("div.outer-container").append('<button class="btn btn-secondary flexbutton">Push Me!!</button>');
});