window.addEventListener("DOMContentLoaded", function (){

    //define form elements in my form HTML
    var form = document.getElementById("my-form");
    
    var status = document.getElementById("status");

    //Success and error function for after the form is submitted

    function success() {
        form.reset();
        status.innerHTML = "Thanks for your submission!";
    }
    function error() {
        status.innerHTML = "Oops! There was a problem submitting your form";
    }
});