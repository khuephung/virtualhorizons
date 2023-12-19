// Lấy ra phần tử HTML có id là 'header-open' và lưu trữ nó trong biến headerOpen.
const headerOpen = document.querySelector('#header-open')
//  Lấy ra phần tử HTML có id là 'header-close' và lưu trữ nó trong biến headerClose.
const headerClose = document.querySelector('#header-close')
// Lấy ra phần tử HTML có lớp là 'menu-mobile' và lưu trữ nó trong biến mobileMenu.
const mobileMenu = document.querySelector('.menu-mobile')


//  Khi phần tử với id 'header-open' được click một lớp CSS
// được thêm vào phần tử có lớp là 'menu-mobile' -> hiện thị phần tử
headerOpen.onclick = () => {
    mobileMenu.classList.add('open')
}

//ẩn đi phần tử.
headerClose.onclick = () => {
    mobileMenu.classList.remove('open')
}


