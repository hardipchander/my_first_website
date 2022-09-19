"use strict";

function ColorSwitch() {
    //  Getting the links and the button elements 
    const navLinks= document.getElementsByClassName('link');
    const buttonElement=document.getElementById('buttonAct');

    // Simple logic for changing colors
    if(document.body.style.color==='white') {
        for(const link of navLinks) {
            link.style.color='black';
        }
        buttonElement.style.color='black';
        document.body.style.color='black';
                
    }
    else {
        for(const link of navLinks) {
            link.style.color='white';
        }
        buttonElement.style.color='white';
        document.body.style.color='white';
    }    

}

