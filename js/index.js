// Your code goes here
//VARIABLES----------------------------------------------------
let nav = document.querySelectorAll('header .nav-link');

let busPic = document.querySelector('.intro img');

let introP = document.querySelector('.intro p');



 








//EVENT LISTENERS ---------------------------------------------

//prevent refreshing of page


//mouse over
nav.forEach(item => {
    item.addEventListener('mouseover', mouseOverColor);
});

// nav[0].addEventListener('mouseover', mouseOverColor);
// nav[1].addEventListener('mouseover', mouseOverColor);
// nav[2].addEventListener('mouseover', mouseOverColor);
// nav[3].addEventListener('mouseover', mouseOverColor);

//mouse out

nav.forEach(item => {
    item.addEventListener('mouseout', mouseOut);
});

// nav[0].addEventListener('mouseout', mouseOut);
// nav[1].addEventListener('mouseout', mouseOut);
// nav[2].addEventListener('mouseout', mouseOut);
// nav[3].addEventListener('mouseout',mouseOut);

//key press [escape]
document.addEventListener('keydown', hueChangeBus);

//wheel event
introP.addEventListener('wheel', scrollText);

//loading event
window.addEventListener('load', (event) =>
{
    alert('the page has loaded');
})






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

//key down filter on image of bus that clears on the push of other keys

function hueChangeBus(e){
    if(event.key === 'Escape'){
    busPic.style.filter = 'hue-rotate(90deg)';
    } else {
        busPic.style.filter = null;
    }
}

//wheel 

function scrollText(e){
    introP.style.fontSize = '2rem';
}