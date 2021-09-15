class MobileNavBar
{
    constructor(mobileMenu, navList, navLinks)
    {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this)
    }


handleClick()
{
    console.log(this);
    this.navList.classList.toggle(this.activeClass);
}

addClickEvent()
{
    this.mobileMenu.addEventListener("click", this.handleClick);
}

init ()
{
    if (this.mobileMenu)
    {
        this.addClickEvent();
    }
    return this;
}
}
const mobileNavBar = new MobileNavBar
(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);
mobileNavBar.init();
