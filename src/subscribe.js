"use strict"

let subscribeForm = document.forms.subscribe,
    emailInput = subscribeForm.elements.email,
    submit = subscribeForm.elements.submit;
    
function correct(){
    let value = this.value;
    if(value.includes("@")){
        
    }
}

emailInput.addEventListener("change",correct);


