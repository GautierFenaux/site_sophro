/* const firstDropdown = document.querySelector('.menu-list li:first-child') ;
const firstDropdownList = document.querySelector('.menu-list li:first-child ul') ; */
const burgerMenu = document.querySelector('.menu');
const ulMenu = document.querySelector('div.menu-list');
const header = document.querySelector('header');
const menu1Label = document.querySelector('.menu1');
const menu1 = document.querySelector('.menu1 div');
const menu2Label = document.querySelector('.menu2');
const menu2 = document.querySelector('.menu2 div');
// Ferme et ouvre le menu correspondant
menu1Label.addEventListener('click', () => {
    

    if(menu1.style.height === '0px' && menu2.style.height === '300px') {
        menu1.style.height = '300px'
        menu2.style.height = '0px'
    } else if (menu1.style.height === '0px') {
        menu1.style.height = '300px'
    } else {
        menu1.style.height = '0px'
    }
     

})

menu2Label.addEventListener('click', () => {
    if(menu2.style.height === '0px' && menu1.style.height === '300px') {
        menu2.style.height = '300px'
        menu1.style.height = '0px'
    } else if (menu2.style.height === '0px') {
        menu2.style.height = '300px'
    }else {
        menu2.style.height = '0px'
    }
})


burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('menu-open');
    ulMenu.style.opacity == 0 ? ulMenu.style.opacity = 1 : ulMenu.style.opacity = 0;
    if(burgerMenu.classList.contains('menu-open')) {
        ulMenu.style.transition = '0.8s ease-in-out';
    } else {
        ulMenu.style.transition = '.1s ease-in-out';
    }
    
})



burgerMenu.addEventListener('click', () => {
    
    header.classList.toggle('active')
})






/* console.log(firstDropdownList);

firstDropdown.addEventListener('click', (e) => {
    // firstDropdownList.style.height == 0 ? firstDropdownList.style.height = '100%' : firstDropdownList.style.height == '0px' ;
    if(firstDropdownList.style.height == '0px') {
        console.log('taille avant click ==> ', firstDropdownList.style.height) ;
        firstDropdownList.style.height = '100%' ;
        console.log('taille après click ==> ', firstDropdownList.style.height) ;
    }
    else if (firstDropdownList.style.height = '100%') {
        firstDropdownList.style.height = '0px' ;
    }
    
}) */






/* 
function collapseSubMenu(menuItemHasSubMenu) {
    
} */

