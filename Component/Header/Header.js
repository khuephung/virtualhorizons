const headerOpen = document.querySelector('#header-open')
const headerClose = document.querySelector('#header-close')
const mobileMenu = document.querySelector('.menu-mobile')



headerOpen.onclick = () => {
    mobileMenu.classList.add('open')
}

headerClose.onclick = () => {
    mobileMenu.classList.remove('open')
}


