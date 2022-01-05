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

