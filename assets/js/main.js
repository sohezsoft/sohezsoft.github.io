/*--------------------------------------------------------------
  DEVELOPED BY SAYYED SOHEL.
  GITHUB - @SOHEZ
  COPYRIGHT 
--------------------------------------------------------------*/


/*--------------------------------------------------------------
# Toggle The Navigation Bar.
--------------------------------------------------------------*/
function navToggle() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("nav-show");
}

/*--------------------------------------------------------------
# Add top-sticky-bar background shadow when scollX. 
--------------------------------------------------------------*/
const topStickyBarShadowToggle = () => {
    let header = document.getElementById("top-sticky-bar");
    let sticky = header.offsetTop; // offsetTop: 

    if (window.scrollY > sticky) {
        header.classList.add("add-shadow");
    } else {
        header.classList.remove("add-shadow");
    }
};
window.addEventListener("scroll", topStickyBarShadowToggle);

/*--------------------------------------------------------------
# Menu Item, click handle to on Page navigate. 
--------------------------------------------------------------*/
const onPageNavigateTo = (elementId) => {
    navToggle();
    document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' });
}

const onPageNavigateContact = (elementId) => {
    document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' });
}
/*--------------------------------------------------------------
# Hide The nav when outside click.
--------------------------------------------------------------*/
document.getElementById('nav').addEventListener('click',(e)=>{
    // console.log(e.target+" and "+this)
    if (e.target !== e.currentTarget){
        return;
    }
    navToggle();
});
