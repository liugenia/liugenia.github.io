const menuBtn=document.querySelector('.menu-btn');
const navBar=document.querySelector('.navbar');
const navLink=document.querySelectorAll('.navlink');

let menuOpen=false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen){
        // opens menu and transforms menu button on button click
        menuBtn.classList.add('open');
        navBar.classList.add('open');
        menuOpen=true;
        // closes menu and transforms menu button on link click
        navLink.forEach((link) => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('open');
                navBar.classList.remove('open');
                menuOpen=false;
            })
        })
    } else {
        // closes menu and transforms menu button on button click
        menuBtn.classList.remove('open');
        navBar.classList.remove('open');
        menuOpen=false;
    }
});