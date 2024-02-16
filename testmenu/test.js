const menu1Label = document.querySelector('.menu1');
const menu1 = document.querySelector('.menu1 div');
const menu2Label = document.querySelector('.menu2');
const menu2 = document.querySelector('.menu2 div');

menu1Label.addEventListener('click', () => {
    menu1.style.height === '0px' ?  menu1.style.height = '300px' : menu1.style.height = '0px'
    menu2.style.height === '300px' ?  menu2.style.height = '0px' : menu2.style.height = '300px'

})

menu2Label.addEventListener('click', () => {
    menu2.style.height === '0px' ?  menu2.style.height = '300px' : menu2.style.height = '0px'
    menu1.style.height === '300px' ?  menu1.style.height = '0px' : menu1.style.height = '300px'
})


