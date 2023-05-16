const copyableElements = document.getElementsByClassName('contact-value');
const CTCtooltip = document.getElementsByClassName('tooltip-text');
const elmnt7 = document.getElementsByClassName('content-7');
const elmnt8 = document.getElementsByClassName('content-8');
const emailInput = document.getElementsByClassName('input-mail');
const loader = document.getElementsByClassName('loader');


const elmnt7targetMargin = 150;
const elmnt8targetMargin = 100;
const maxIterations = 25;
let curIteration7 = -1;
let curIteration8 = -1;
let opacity7 = 0.0;
let opacity8 = 0.0;
 
elmnt7[0].style.opacity = opacity7.toString();  
loader[0].style.opacity = 0;

let CTCtooltipIsRunning = false;
let CTCtooltipIsVisible = false;
let tooltipDisabled = false;

for(let i = 0; i < copyableElements.length; i++){
    const element = copyableElements[i]
    element.addEventListener('click', (e) => {clickFunction(element.innerHTML)});
    element.addEventListener('mouseover', (e) => {startCTCtooltip(true)});
    element.addEventListener('mouseleave', (e) => {stopCTCtooltip()});
};

emailInput[0].addEventListener('blur', async function(){
    if(emailInput[0].value.length == 0) return;
    console.log(emailInput[0].value);    
    loader[0].style.opacity = 1;
    await sleep(1200);    
    loader[0].style.opacity = 0;
    if(validateEmail(emailInput[0].value)){
        console.log("valid email");
    }
    else{
        console.log("invalid email");
    }
})

//console.log(CTCtooltip.style.opacity);
function clickFunction(string) {
    navigator.clipboard.writeText(string);
    CTCtooltip[0].innerHTML = "zkopírováno!";

    tooltipDisabled = true;
    CTCtooltip[0].style.animation = "tooltip-transition-show 0.2s";
    CTCtooltip[0].style.opacity = "1";

    setTimeout(function(){
        CTCtooltip[0].style.animation = "tooltip-transition-hide 0.2s";
        CTCtooltip[0].style.opacity = "0";
        tooltipDisabled = false;
    }, 2000);

    setTimeout(function(){
        CTCtooltip[0].innerHTML = "zkopírovat do schránky";
    }, 2200);


}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startCTCtooltip(wait){
    if(tooltipDisabled) return;
    CTCtooltipIsRunning = true;
    if(wait)
    {
        await sleep(1000);
    }
    if (CTCtooltipIsRunning){    
        CTCtooltipIsVisible = true;
        CTCtooltip[0].style.animation = "tooltip-transition-show 0.2s";
        CTCtooltip[0].style.opacity = "1";
    }
    else{
        CTCtooltip[0].style.opacity = "0";
        CTCtooltipIsVisible = false;
    }
}

function stopCTCtooltip(){
    if(tooltipDisabled) return;
    if (CTCtooltipIsVisible){
        CTCtooltip[0].style.animation = "tooltip-transition-hide 0.2s";
        CTCtooltip[0].style.opacity = "0";
    }
    CTCtooltipIsRunning = false;
    CTCtooltipIsVisible = false;

}

function iterate7(){
    curIteration7++;
    opacity7 += 1 / maxIterations;
    if(curIteration7 == maxIterations) return;

    
    //calculate new position    
    const curPosEl7 = parseFloat(window.getComputedStyle(elmnt7[0]).getPropertyValue("margin-right"))
    const newPosEl7 = curPosEl7 + (elmnt7targetMargin - curPosEl7) * 0.2;

    //assign new posotion and opacity
    elmnt7[0].style.marginRight = newPosEl7.toString() + "px";
    elmnt7[0].style.opacity  = opacity7.toString();   

    setTimeout(iterate7, 30);

}

function iterate8(){
    curIteration8++;
    opacity8 += 1 / maxIterations;
    if(curIteration8 == maxIterations) return;

    
    //calculate new position    
    const curPosEl8 = parseFloat(window.getComputedStyle(elmnt8[0]).getPropertyValue("margin-left"))
    const newPosEl8 = curPosEl8 + (elmnt8targetMargin - curPosEl8) * 0.2;

    //assign new posotion and opacity
    elmnt8[0].style.marginLeft = newPosEl8.toString() + "px";
    elmnt8[0].style.opacity  = opacity8.toString();   

    setTimeout(iterate8, 30);

}

const validateEmail = (email) => { //this should be later replaced with server-side check
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};


iterate8()
setTimeout(iterate7, 500);

