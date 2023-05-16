const elmnt4 = document.getElementsByClassName('content-4');
const elmnt5 = document.getElementsByClassName('content-5');
const elmnt6 = document.getElementsByClassName('content-6');
const elmnt7 = document.getElementsByClassName('background-image');

const elmnt4targetMargin = 150;
const elmnt5targetMargin = 300;
const elmnt6targetMargin = 530;
const elmnt7targetMargin = 100;

const maxIterations = 25;

let curIteration4 = -1;
let curIteration5 = -1;
let curIteration6 = -1;
let curIteration7 = -1;

let opacity4 = 0.0;
let opacity5 = 0.0;
let opacity6 = 0.0;
let opacity7 = 0.0;

elmnt4[0].style.opacity  = opacity4.toString();  
elmnt5[0].style.opacity  = opacity5.toString();  
elmnt6[0].style.opacity  = opacity6.toString();  
elmnt7[0].style.opacity  = opacity7.toString();  

function iterate4(){
    curIteration4++;
    opacity4 += 1 / maxIterations;
    if(curIteration4 == maxIterations) return;

    
    //calculate new position
    const curPosEl4 = parseFloat(window.getComputedStyle(elmnt4[0]).getPropertyValue("margin-left"))
    const newPosEl4 = curPosEl4 + (elmnt4targetMargin - curPosEl4) * 0.2;

    //assign new posotion and opacity
    elmnt4[0].style.marginLeft = newPosEl4.toString() + "px";
    elmnt4[0].style.opacity  = opacity4.toString();  

    setTimeout(iterate4, 30);
}

function iterate5(){
    curIteration5++;
    opacity5 += 1 / maxIterations;
    if(curIteration5 == maxIterations) return;
    
    //calculate new position    
    const curPosEl5 = parseFloat(window.getComputedStyle(elmnt5[0]).getPropertyValue("margin-left"))
    const newPosEl5 = curPosEl5 + (elmnt5targetMargin - curPosEl5) * 0.2;

    //assign new posotion and opacity
    elmnt5[0].style.marginLeft = newPosEl5.toString() + "px";
    elmnt5[0].style.opacity = opacity5.toString();  

    setTimeout(iterate5, 30);
}

function iterate6(){
    curIteration6++;
    opacity6 += 1 / maxIterations;
    if(curIteration6 == maxIterations) return;

    
    //calculate new position    
    const curPosEl6 = parseFloat(window.getComputedStyle(elmnt6[0]).getPropertyValue("margin-left"))
    const newPosEl6 = curPosEl6 + (elmnt6targetMargin - curPosEl6) * 0.2;

    //assign new posotion and opacity
    elmnt6[0].style.marginLeft = newPosEl6.toString() + "px";   
    elmnt6[0].style.opacity  = opacity6.toString();   

    setTimeout(iterate6, 30);

}

function iterate7(){
    curIteration7++;
    opacity7 += 1 / maxIterations;
    if(curIteration7 == maxIterations) return;

    
    //calculate new position    
    const curPosEl7 = parseFloat(window.getComputedStyle(elmnt7[0]).getPropertyValue("right"))
    const newPosEl7 = curPosEl7 + (elmnt7targetMargin - curPosEl7) * 0.2;

    //assign new posotion and opacity
    elmnt7[0].style.right = newPosEl7.toString() + "px";
    elmnt7[0].style.opacity  = opacity7.toString();   

    setTimeout(iterate7, 30);

}

iterate4();
setTimeout(iterate5, 200)
setTimeout(iterate6, 400)
setTimeout(iterate7, 500)