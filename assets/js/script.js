window.addEventListener("DOMContentLoaded", function (){

    //define form elements in my form HTML
    var form = document.getElementById("my-form");
    
    var status = document.getElementById("status");

    //Success and error function for after the form is submitted

    function success() {
        form.reset();
        status.classList.add('success');
        status.innerHTML = "Thanks for your submission!";
    }
    function error() {
        status.classList.add("error");
        status.innerHTML = "Oops! There was a problem submitting your form";
    }

    // handle the form submission event
    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});


function openMenu() {
    document.getElementById("myMenu").style.height = "100%"
}

function closeMenu() {
    document.getElementById("myMenu").style.height = "0%"
}


// Nutr API with no city search
var apiKeyNurt = "6584c087f01a1fe506b4d8d229ac9b0c";
var urlNutr = "https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=a1eca907&appKey=6584c087f01a1fe506b4d8d229ac9b0c";
var apID = "a1eca907";


// Yelp API 
var yelpApiKey = "G8YQ2xM9Koh37S1t_cdPeCy3U2MIw4gX6d4IMiKMxhIadmcIasbracE1PRn7sVpYX01QYmlnF16eWXx6yTezffE7gYr2YHIAV1-93Ys97ivhvFzQ_123QEA1_jXWYXYx";
var yelpClientKey = "Y4Lnn8XkDx_vJBjpxKzE-Q";

var businessSearch = "https://api.yelp.com/v3/businesses/search?term=restaurants?location=Dallas?";


//Example
fetch("https://api.yelp.com/v3/businesses/search?location=NYC").then((resp) => {
    return resp.json()
}).then((data) => {
    console.log(data)
})