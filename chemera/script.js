const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
  wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => {
  wrapper.classList.toggle('active');
});




/* logo */

let altitude = 100;
/* center: 0, left: -100, right: +100*/
let sideway = 0;

/* Accessing animated bird */
const flyingBird = document.querySelector('#bird');

/* Arrow buttons */
const buttonLeft = document.querySelector('#arrow-button-left');
const buttonUp = document.querySelector('#arrow-button-up');
const buttonDown = document.querySelector('#arrow-button-down');
const buttonRight = document.querySelector('#arrow-button-right');

/* Arrow buttons shadows */
const boxShadowOn = "box-shadow: 0px 5px 30px white;"
const boxShadowOff = "box-shadow: 0px 0px 0px white;";

/* Key down events */

document.addEventListener('keydown',(e) => {
   
    if(e.key === "ArrowRight") {            

        buttonRight.style = boxShadowOn;

        const container = document.querySelector('#bird-perspective');

        let r = container.offsetLeft;
    
        flyingBird.classList.remove('fly-default'); 
        flyingBird.classList.add('arrow-right');        
    
        sideway++;
    
        if(sideway <= 100) {
            container.style.left = `${r = r + 1}px`;                               
        } else sideway = 100;
        
    }

    if(e.key === "ArrowLeft") {       

        buttonLeft.style = boxShadowOn;

        const container = document.querySelector('#bird-perspective');

        let r = container.offsetLeft;

        flyingBird.classList.remove('fly-default'); 
        flyingBird.classList.add('arrow-left');    
        
        sideway--;

        if(sideway >= -100) {
            container.style.left = `${r = r - 1}px`;
        } else sideway = -100;

    }

     if(e.key === "ArrowUp") {              

        buttonUp.style = boxShadowOn;

        const zoomIn = document.querySelector('#landscape');
        
        if(altitude <= 120) {
            zoomIn.style.width = `${altitude++}%`;
        } else altitude = 120;

        flyingBird.classList.remove('fly-default'); 
        flyingBird.classList.add('arrow-up'); 
    } 

    if(e.key === "ArrowDown") {         
        
        buttonDown.style = boxShadowOn;

        const zoomOut = document.querySelector('#landscape');
        
        if(altitude >= 80) {
            zoomOut.style.width = `${altitude--}%`;
        } else altitude = 80;

        flyingBird.classList.remove('fly-default'); 
        flyingBird.classList.add('arrow-down'); 
    }   

});

/* Key up events */

document.addEventListener('keyup',(e) => {    

    if(e.key === "ArrowRight") {            

        flyingBird.classList.remove('arrow-right'); 
        flyingBird.classList.add('fly-default');  
        
        buttonRight.style = boxShadowOff;
    }

    if(e.key === "ArrowLeft") {       

        flyingBird.classList.remove('arrow-left'); 
        flyingBird.classList.add('fly-default');  
        
        buttonLeft.style = boxShadowOff;
    }

    if(e.key === "ArrowUp") {       

        flyingBird.classList.remove('arrow-up'); 
        flyingBird.classList.add('fly-default');      

        buttonUp.style = boxShadowOff;
    }

    if(e.key === "ArrowDown") {       
    
        flyingBird.classList.remove('arrow-down'); 
        flyingBird.classList.add('fly-default');      

        buttonDown.style = boxShadowOff;
    }   

}); 




