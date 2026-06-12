"use strict"

let subscribeForm = document.forms.subscribe,
    emailInput = subscribeForm.elements.email,
    submit = subscribeForm.elements.submit;

emailInput.addEventListener("input", function (e) {
    const value = e.target.value;
    const isValidDomain = subscribeForm.checkValidity();
    if(!isValidDomain){
        submit.style.color = "";
        submit.style.borderColor = "";
    } else {
        submit.style.color = "#4B9200";
        submit.style.borderColor = "#4B9200";
    }
});


