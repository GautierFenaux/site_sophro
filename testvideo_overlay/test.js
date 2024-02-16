const button = document.querySelector('.button');
const header = document.querySelector('.header')

button.addEventListener('click', () => {
    
    header.classList.toggle('active')
})

menu2Label.addEventListener('click', () => {
    menu2.style.height === '0px' ?  menu2.style.height = '300px' : menu2.style.height = '0px'
    menu1.style.height === '300px' ?  menu1.style.height = '0px' : menu1.style.height = '300px'
})


