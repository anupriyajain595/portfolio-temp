// navigation menu
(() =>{

const hamburgerBtn = document.querySelector(".hamburger-btn"),
navMenu = document.querySelector(".nav-menu"),
closeNavBtn= navMenu.querySelector(".close-nav-menu");

hamburgerBtn.addEventListener("click", showNavMenu);
closeNavBtn.addEventListener("click", hideNavMenu);

    function showNavMenu(){
    navMenu.classList.add("open");
    bodyScrollingToggle();
}
    function hideNavMenu(){
    navMenu.classList.remove("open");
    fadeOutEffect();
    bodyScrollingToggle();
}
function fadeOutEffect(){
document.querySelector(".fade-out-effect").classList.add("active");
setTimeout(() =>{
document.querySelector(".fade-out-effect").classList.remove("active");
},300)
}
// attach an event handler to doucument
document.addEventListener("click", (event) =>{
    if(event.target.classList.contains('link-item')){
        // make sure event.target.hash has a value before overriding default behavior
        if(event.target.hash !==""){
            // prevent defalut anchor click behavior
            event.preventDefault();
            const hash = event.target.hash;
            // deactivate existing active 'section'
            document.querySelector(".section.active").classList.add("hide");
            document.querySelector(".section.active").classList.remove("active");
            // activate new 'section'
            document.querySelector(hash).classList.add("active");
            document.querySelector(hash).classList.remove("hide");
            // deactivate existing active navigation menu link-item
            navMenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow");
            navMenu.querySelector(".active").classList.remove("active","-inner-shadow");
            // if clicked 'link-item is contained withing the navigation menu'
            if(navMenu.classList.contains("open")){
            // activate new navigation menu
        event.target.classList.add("active", "inner-shadow");
        event.target.classList.remove("outer-shadow","hover-in-shadow");
        // hide navigation menu
        hideNavMenu();
        }
        else{
            let navItems = navMenu.querySelectorAll(".link-item");
            navItems.forEach((item) =>{
             if(hash === item.hash){
                // activate new navigation menu 'link-item'
        item.classList.add("active", "inner-shadow");
        item.classList.remove("outer-shadow","hover-in-shadow");
        }
    })
     fadeOutEffect();
      }
    //   add hash (#) to url
     window.location.hash = hash;
    }
  }
})
})();

// about section tabs 
 (() =>{
const aboutSection = document.querySelector(".about-section"),
tabsContainer =  document.querySelector(".about-tabs");

tabsContainer.addEventListener("click", (Event) =>{
    // if event.target contains 'tab-item' class and not contains 'active' class 

    
if(Event.target.classList.contains("tab-item") &&
!Event.target.classList.contains(".active")){
    const target = Event.target.getAttribute("data-target");
    // deactivate existig active 'tab-item'
    tabsContainer.querySelector(".active").classList.remove(".outer-shadow","active");
    // activate new 'tabs-item'
    Event.target.classList.add("active","outer-shadow");
    // deactivate existing active 'tab-content'
    aboutSection.querySelector(".tab-content.active").classList.remove("active");
    // activate new 'tab-content'
    aboutSection.querySelector(target).classList.add("active");

}
})
 })();
//  hide all section except active

 (() => {

    const sections = document.querySelectorAll(".section");
    sections.forEach((section) =>{
        if(!section.classList.contains("active")){
            section.classList.add("hide");
        }
    })
})();  