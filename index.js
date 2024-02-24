
const burgerMenu = document.querySelector('.menu');
const ulMenu = document.querySelector('div.menu-list');
const header = document.querySelector('header');
const menuHasSubMenu = document.querySelectorAll('.menu-item-has-children');
const navMenu = document.querySelector('nav');

// Centre la nav une fois au chargement de la fenêtre
window.addEventListener("load", () => {
    centerLastElement(navMenu, header);
});

window.addEventListener('resize', () => {
    centerLastElement(navMenu, header);
})


Array.prototype.slice.call(menuHasSubMenu).forEach((menu) => {
    menu.addEventListener('click', (e) => {
        toggleSubMenu(menu, '.slide', header, e)
    })
})

burgerMenu.addEventListener('click', (e) => {
    burgerMenu.classList.toggle('menu-open');

    if(burgerMenu.classList.contains('menu-open')) {
        navMenu.style.visibility = 'visible'
    } else {
        navMenu.style.visibility = 'hidden'
    }
    
    ulMenu.style.opacity == 0 ? ulMenu.style.opacity = 1 : ulMenu.style.opacity = 0;

    if(burgerMenu.classList.contains('menu-open')) {
        ulMenu.style.transition = '0.8s ease-in-out';
    } else {
        ulMenu.style.transition = '.01s ease-in-out';
    }
    header.classList.toggle('active')
    // Si les menus sont ouverts à la fermeture du header alors on ferme également les menus
        Array.prototype.slice.call(menuHasSubMenu).forEach((menu) => {
            if(menu.classList.contains('active-sub')) {
                toggleSubMenu(menu, '.slide', header, e)
            }
        })
    
})

// La fonction rajoute un flag à l'élément cliqué, si l'élément cliqué ne contient pas le flag alors on ouvre le sous-menu
// A l'inverse si il contient le flag on enlève les attributs au sous-menu et le flag
// Resize le header (peut être séparé de cette fonction)
function toggleSubMenu(menuItemHasChildren, subMenuToOpen, header, event) {

    const flag = 'active-sub' ;
    const subMenu =  menuItemHasChildren.querySelector(subMenuToOpen);

    // Permet de fermer tous les éléments qui sont ouverts, !!!!!refactoriser!!!!!
    for(let j = 0; j <= menuHasSubMenu.length; j++) {
        if(typeof menuHasSubMenu[j] !== 'undefined' && menuHasSubMenu[j] !== menuItemHasChildren) {
        if(menuHasSubMenu[j].classList.contains('active-sub')) {
                toggleSubMenu(menuHasSubMenu[j], '.slide', header, event)
            }
        }
    }

    if(!menuItemHasChildren.classList.contains(flag)) {
        menuItemHasChildren.classList.add(flag);
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        header.style.height = header.offsetHeight + subMenu.scrollHeight + 'px';
    } else {
        menuItemHasChildren.querySelector(subMenuToOpen).removeAttribute("style");
        menuItemHasChildren.classList.remove(flag);
        if(event.target.parentNode === menuItemHasChildren) {
            setTimeout(() => {
                header.style.height = 100 + 'vh';
            }, 175);
        } else {
            header.style.height = 100 + 'vh';
        }
    }
    
}



// Obligé d'utiliser un centrage 'manuel' car avec l'automatique en css l'élément se repositionne quand il change de taille
const centerLastElement = (lastChild, parentElement) => {
    const distanceFromBottom = parentElement.getBoundingClientRect().bottom - parentElement.lastElementChild.getBoundingClientRect().bottom;
    const totalDistance = lastChild.getBoundingClientRect().top + distanceFromBottom
    lastChild.style.margin = `${Math.round(totalDistance / 2)}px 0`
    lastChild.style.position = 'absolute'
    lastChild.style.top = 0
}



//Pour attraper un pseudo élément possibilité de lui ajouter une variable et de le récupérer par cette variable
// Indirectement on peut donc modifier un pseudo élément
document.documentElement.style.setProperty("--style-title", "78px");















































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

