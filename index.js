let menuIcon=document.querySelector("#menu-text");
let navbar=document.querySelector(".navbar");
letsections =document.querySelectorAll(".section");

let navLink=document.querySelectorAll('.header nav a');
window.onscroll = () => {
    Selection.forEach(sec => {
        let top = window.scrollY;
        let offset = src.offsetTop-150;
        let height = src.offsetHeight;
        let id = sec.getAtribte("id");

        if(top >= offset && top < offset + height){
            navLink.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            })
        }
    })
    menuIcon.oneclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }

}
