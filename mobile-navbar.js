class MobileNavBar{
    constructor(mobileMenu) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorALL(navLinks);
        this.activeClass = "active";


        this.handleClick = this.handleClick.bind(this);
    }
    animateLinks(){
        this.navLinks.forEach((link, index) => {
        
            link.style.animation
            ? (link.style.animation="")
            : (link.style.animation= `navLinkFade 0.5s ease forwards $
            {index / 7 + 0.3}`);

        });
    }
    handleClick() {
        
        this.navList.clsssList.toggle(this.activeClass);
        this.mobileMenu.ClassList.toggle(this.activeClass);
        this.animateLinks();
    }


addClickEvent() {
    this.mobileMenu.addEventListener("Click", this.handleClick);
   }

   init() {
       if (this.mobileMenu){
           this.addClickEvent();
       }
       return this;
   }
}   
 const MobileNavBar = new MobileNavBar(
     ".mobile-menu",
     ".nav-list",
     ".nav-list li"

 );