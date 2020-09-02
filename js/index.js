if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registered!");
        console.log(registration);
    }).catch(error => {
        console.log("Sw Registration Failed");
        console.log(error);
    });
}

// if there is clicked on the div then he's gonna look if the click was on the button
$('div.outer-container').on('click', 'button', function () {
    $("div.outer-container").append('<button class="btn btn-secondary flexbutton">Push Me!!</button>');
});
