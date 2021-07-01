


// handle with the hidden nav

let headers = document.querySelectorAll('.main-header-item');
let hiddenNav = document.querySelectorAll('.hidden-nav');
let body = document.querySelector('body');
body.addEventListener('click',(event) =>{
    handleNavClickEvents(event);
})
function handleNavClickEvents(event){
    let currentNavItem;
    if(event.target.classList != null && event.target.classList.contains('main-header-item')){
        for(let i=1; i<headers.length-2; i++){
            if(event.target == headers[i] && (hiddenNav[i-1].style.display != 'grid' && hiddenNav[i-1].style.display != 'block')){
                if(body.offsetWidth > 1018)
                    hiddenNav[i-1].style.display = 'grid';
                else 
                    hiddenNav[i-1].style.display = 'block';
                currentNavItem = i-1;
            }
            
        }        
    }   
    for(let i=0; i<hiddenNav.length; i++){
        if(i!=currentNavItem)
        hiddenNav[i].style.display = "none";   
    }  
}


// handle with the scrolled text.
const scrolledText =  document.querySelector(' .inner > p');
const scrollTextContainer = document.querySelector('.scroll-text-container');
const container = scrollTextContainer.querySelector('.inner');

let speed = 1;
let lastScrollPos = 0;
let timer;
let progress = 1;

//Get total width
const elWidth = scrolledText.offsetWidth;
//Duplicate content
let clone = scrolledText.cloneNode(true);
container.appendChild(clone);
addScrollEventListener();
scrollLoop();


function scrollLoop() {
    progress = progress - speed;
    if(progress <= elWidth * -1) {
    progress = 0;
    }        
      container.style.transform = 'translateX(' + -progress + 'px)';             
      window.requestAnimationFrame(scrollLoop);                      
}   
    // stops the scroll on mouse over
function addScrollEventListener(){
    scrolledText.addEventListener('mouseover', function(){
      speed = 0;   
    })        
    scrolledText.addEventListener('mouseout', function(){
      speed = 1;   
    })
}     


    // handle with the video 
let videoLink = document.querySelector('.video-link_container');
let backdrop = document.querySelector('.backdrop');
let video = document.querySelector('.video');
videoLink.addEventListener('click' , function(){
    video.style.display = 'block';
    backdrop.style.display = 'block';
})
backdrop.addEventListener('click' , function(){
    video.style.display = 'none';
    backdrop.style.display = 'none';
    var iframes = document.getElementsByTagName("iframe");
    iframes[0].src = iframes[0].src;
})



// handle with the animations.
const screenSize = window.screen.height;
let elem = document.querySelectorAll('.process_element');
let elem2 = document.querySelector('html');
let animatedElements = document.querySelectorAll('.animated-elements')
let processElementOpened = false;
window.addEventListener('scroll', function(){ handleScrollEvent();}, true);

function  handleScrollEvent(){
    if(elem2.scrollTop > 1400 && processElementOpened == false){
        for(let i=0; i<elem.length; i++){
            setTimeout(function(){elem[i].classList.add('transitionEffect'); }, i*500); 
        }
        processElementOpened = true;
    } 
    for(let i=0; i<animatedElements.length; i++){
        if(elem2.scrollTop + window.screen.height > animatedElements[i].offsetTop)
        animatedElements[i].classList.add('transitionEffect');
    }  
}



let navContainer = document.querySelector('.main-nav-ul');
let headerIcon = document.querySelectorAll('.header-icon');
let headerIconContainer = document.querySelector('.header-icon-container');
headerIconContainer.addEventListener('click',() =>{
if(!headerIcon[0].classList.contains('transition-a')){
    headerIcon[0].classList.add('transition-a');
    headerIcon[1].classList.add('transition-c');
    headerIcon[2].classList.add('transition-b');
    navContainer.style.display = 'block';
}
else{
    headerIcon[0].classList.remove('transition-a');
    headerIcon[1].classList.remove('transition-c');
    headerIcon[2].classList.remove('transition-b');
    navContainer.style.display = 'none';
}
})




let popUp = document.querySelector('.pop-up-container');
function openPopUp(){
    popUp.style.display = 'inline-block';
    // setTimeout(() => {popUp.classList.add('transitionEffect');}, 1600);
    // popUp.style.transform = 'translateY(0px)';
    vv();
    backdrop.style.display = 'block';
}
let xIcon = document.querySelector('.x-icon');
xIcon.addEventListener('click', ()=>{
    popUp.style.display = 'none';
    backdrop.style.display = 'none';
})


function vv(){
    setTimeout(() => {popUp.classList.add('transitionEffect');}, 1600);
}

