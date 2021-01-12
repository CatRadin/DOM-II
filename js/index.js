// Your code goes here
//VARIABLES----------------------------------------------------
let nav = document.querySelectorAll('header .nav-link');
let busPic = document.querySelector('.intro img');
console.log(busPic);

busPic.style.filter = 'gracyscale(100%)';

 








//EVENT LISTENERS ---------------------------------------------

//mouse over
nav[0].addEventListener('mouseover', mouseOverColor);
nav[1].addEventListener('mouseover', mouseOverColor);
nav[2].addEventListener('mouseover', mouseOverColor);
nav[3].addEventListener('mouseover', mouseOverColor);

//mouse out
nav[0].addEventListener('mouseout', mouseOut);
nav[1].addEventListener('mouseout', mouseOut);
nav[2].addEventListener('mouseout', mouseOut);
nav[3].addEventListener('mouseout',mouseOut);







//FUNCTIONS---------------------------------------------------------

//mouse over and out
function mouseOverColor(e){
    let elm = event.target;
    elm.style.color = '#C1666B';
    elm.style.background = '#494850';
    elm.style.padding = '1rem';
    elm.style.borderRadius = '1rem';
    elm.style.fontWeight = 'Bold';
}

function mouseOut(e){
    let elm = event.target;
    elm.style.color = null;
    elm.style.background = null;
    elm.style.padding = null;
    elm.style.borderRadius = null;
    elm.style.fontWeight = null; 
}

//key down dark mode

function grayScaleBus(e){

}
