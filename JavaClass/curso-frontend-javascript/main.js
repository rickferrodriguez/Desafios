const $navbar_email = document.querySelector('.navbar-email')
const $menu_ham = document.querySelector('.menu')
const $desktop_menu = document.querySelector('.desktop-menu')
const $mobile_menu = document.querySelector('.mobile-menu')
const $shopping_button = document.querySelector('.navbar-shopping-cart')
const $product_detail = document.querySelector('.product-detail')

$navbar_email.addEventListener('click', () => {
    $desktop_menu.classList.toggle('inactive')
    $product_detail.classList.add('inactive')
    $mobile_menu.classList.add('inactive')
    console.log('presionado papu')
})

$menu_ham.addEventListener('click', () => {
    $mobile_menu.classList.toggle('inactive')
    $product_detail.classList.add('inactive')
    $desktop_menu.classList.add('inactive')
    console.log('presionado mobile')
})

$shopping_button.addEventListener('click', () => {
    $product_detail.classList.toggle('inactive')
    $mobile_menu.classList.add('inactive')
    $desktop_menu.classList.add('inactive')
    console.log('presionado mobile')
})
