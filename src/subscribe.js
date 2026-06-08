"use strict"

let subscribeForm = document.forms.subscribe,
    emailInput = subscribeForm.elements.email,
    submit = subscribeForm.elements.submit;

emailInput.addEventListener("change", function (e) {
    const value = e.target.value;
    const isValidDomain = value.includes("@")
    if(!isValidDomain){
        emailInput.style.color = "#D31414";
    } else {
        emailInput.style.color = "#fff";
    }
});


