window.addEventListener("DOMContentLoaded", function () {

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

// helper function for sending an AJAX request
function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application.json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            (xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);

}
// Mobile Menu

const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
});
// Worldwide Restaurants API Documentation

//Using jQuery
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://worldwide-restaurants.p.rapidapi.com/search",
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"x-rapidapi-key": "8a4b8f4af6mshad697da7b4112c7p19d468jsnf30df0617daa",
		"x-rapidapi-host": "worldwide-restaurants.p.rapidapi.com"
	},
	"data": {
		"language": "en_US",
		"limit": "30",
		"location_id": "297704",
		"currency": "USD"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

