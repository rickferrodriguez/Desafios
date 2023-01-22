const $navbar_email = document.querySelector('.navbar-email')
const $menu_ham = document.querySelector('.menu')
const $desktop_menu = document.querySelector('.desktop-menu')
const $mobile_menu = document.querySelector('.mobile-menu')
const $shopping_button = document.querySelector('.navbar-shopping-cart')
const $product_detail = document.querySelector('.product-detail')
const $cards_container = document.querySelector('.cards-container')
const $clothes_el = document.querySelector('#clothes-el')
const $toys_el = document.querySelector('#toys-el')

const product = {
    toys : [
        {
            "nombre": "bike",
            "precio": 120,
            "image": "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "cantidad": 4,
        },
        {
            "nombre": "bike",
            "precio": 120,
            "image": "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "cantidad": 4,
        },
        {
            "nombre": "bike",
            "precio": 120,
            "image": "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "cantidad": 4,
        },
        {
            "nombre": "Adult Trike",
            "precio": 220,
            "image": "https://images.pexels.com/photos/957157/pexels-photo-957157.jpeg?auto=compress&cs=tinysrgb&w=650&h=940&dpr=1",
            "cantidad": 2,
        },
    ],
    clothes : [
        {
            "nombre": "shirt",
            "precio": 20,
            "image": "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "cantidad": 4,
        },
        {
            "nombre": "shirt",
            "precio": 20,
            "image": "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "cantidad": 4,
        },
        {
            "nombre": "shirt",
            "precio": 20,
            "image": "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "cantidad": 4,
        },
        {
            "nombre": "shirt",
            "precio": 20,
            "image": "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "cantidad": 4,
        },
        {
            "nombre": "skirt",
            "precio": 22,
            "image": "https://images.pexels.com/photos/957157/pexels-photo-957157.jpeg?auto=compress&cs=tinysrgb&w=650&h=940&dpr=1",
            "cantidad": 2,
        },
    ],
}

$navbar_email.addEventListener('click', () => {
    $desktop_menu.classList.toggle('inactive')
    $product_detail.classList.add('inactive')
    $mobile_menu.classList.add('inactive')
})

$menu_ham.addEventListener('click', () => {
    $mobile_menu.classList.toggle('inactive')
    $product_detail.classList.add('inactive')
    $desktop_menu.classList.add('inactive')
})

$shopping_button.addEventListener('click', () => {
    $product_detail.classList.toggle('inactive')
    $mobile_menu.classList.add('inactive')
    $desktop_menu.classList.add('inactive')
})

const renderBikes = (arra) => {
    let textInner = ''
    product[arra].map( ele => {
            textInner += `
                <div class="product-card">
                    <img src="${ele.image}" alt="">
                    <div class="product-info">
                        <div>
                            <p>${ele.precio}</p>
                            <p>${ele.nombre}</p>
                        </div>
                        <figure>
                            <img src="./icons/bt_add_to_cart.svg" alt="">
                        </figure>
                    </div>
                </div>
            `
    })
    $cards_container.innerHTML = textInner
}

$clothes_el.addEventListener('click', (event) =>{
    const value = event.target.getAttribute('data-value')
    renderBikes(value)
})

$toys_el.addEventListener('click', (event) =>{
    const value = event.target.getAttribute('data-value')
    renderBikes(value)
})



