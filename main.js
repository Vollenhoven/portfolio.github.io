const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const contact = document.querySelector('.contact')
const nav = document.querySelector('nav')

menu.addEventListener('click',() => {
    nav.classList.add('open-nav')
})

close.addEventListener('click',() => {
    nav.classList.remove('open-nav')
})
contact.addEventListener('click',() => {
    nav.classList.remove('open-nav')
})