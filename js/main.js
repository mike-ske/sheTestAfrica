// import Typed from 'typed.js';
"restrict";

/* 
================ Code for active menu ===============
*/

let nav__link = document.getElementsByClassName("list_1");
let main_menu = document.getElementsByClassName("list_menu")[0];

for (let i = 0; i < nav__link.length; i++) {
    const list__item = nav__link[i];

    list__item.addEventListener("click", function () {
        document.getElementsByClassName("active")[0].classList.remove("active");
        nav__link[i].classList.add("active");
    })
    
    // ==== CODE TO HIDE THE MENU WHEN TABS ARE CLICKED
    list__item.addEventListener("click", function () {
        main_menu.classList.remove("show");
    })
}

/* 
============== CODE TO HIDE AND SHOW MENU ========
*/

let main__nav = document.getElementsByClassName("list_menu")[0];
let nav__icon = document.getElementsByClassName("toggle")[0];

nav__icon.addEventListener('click', function () {
    main__nav.classList.toggle("show");
})

// ============ CODE TO SET ACTIVE MENU FOOTER SECTION

let foot_menu = document.getElementsByClassName("ft_about")[0].getElementsByClassName("ft__01")[0].getElementsByClassName("ft__list")[0];

for (let i = 0; i < foot_menu.length; i++) {
    let ft__link = foot_menu[i];

    ft__link.addEventListener("click", function () {
        document.getElementsByClassName("active_2")[0].classList.remove("active_2");
        foot_menu.classList.add("active_2");
    })

}


// ========= set scroll nav =====

window.addEventListener("scroll", function () {
    document.getElementById("nav").classList.add("sticky");
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
    document.getElementById("nav").classList.remove("sticky");
     
    }
    return;
});


//  ===== code FAQS section
// This code toggle between showing and hiding content

let top__menu = document.getElementsByClassName("menu__1");
// let top__menu = document.getElementsByClassName("menu__1");

let arrow = document.getElementsByClassName("menu__1")[0].getElementsByClassName('arr1');


console.log(top__menu);
for (let i = 0; i < top__menu.length; i++) {
    top__menu[i].addEventListener("click", function () {
      
        var panel = this.nextElementSibling;
       

      if (!panel.style.maxHeight) 
      {
       panel.style.maxHeight = "100%";
    //    for (let i = 0; i < arrow.length; i++) 
    //    {
    //         arrow[i].classList.toggle("rotate");;
    //       console.log(arrow[i]);
    //    } 
       // this.nextElementSibling.style.maxHeight = panel.style.scrollHeight + "px";
      }
       else
       {
            panel.style.maxHeight = null;
       }
    })

        let mid__menu = document.getElementsByClassName("sub__1");
        for (let j = 0; j < mid__menu.length; j++) {
        mid__menu[j].addEventListener("click", function () {
            var mid__panel = this.nextElementSibling;

            if (!mid__panel.style.maxHeight) 
            {
             mid__panel.style.maxHeight = "100%"
             
             // this.nextElementSibling.style.maxHeight = panel.style.scrollHeight + "px";
            }
             else
             {
                  mid__panel.style.maxHeight = null;
             }
        });
        
    }
    
}






// SMOOTH SCROLL ANNIMATION WITH SCROLL REVEAL


// const scroll_item = ScrollReveal(
//     {
//         origin: 'bottom',
//         distance: '70px',
//         duration: 400,
//         reset: true
//     }
// )
// // start assigning the scroll animation to all div containers


//  // =========== INDEX PAGE ANNIMATION ====
// scroll_item.reveal('.hero__main', {delay: 100})
// // scroll_item.reveal('.left_icon', {interval: 200})
// scroll_item.reveal('.about__main', {delay: 100})
// scroll_item.reveal('.skills__main', {delay: 100})
// scroll_item.reveal('.outer__bx', {interval: 100})
// scroll_item.reveal('.works__main', {delay: 100})
// scroll_item.reveal('.grid__box', {interval: 100})
// scroll_item.reveal('.expert__main', {delay: 100})
// scroll_item.reveal('.box1', {interval: 100})

// scroll_item.reveal('.contact__main', {delay: 100})

// scroll_item.reveal('.contact__main', {delay: 100})





//  ========= CONTACT PAGE ANIMATION =====



