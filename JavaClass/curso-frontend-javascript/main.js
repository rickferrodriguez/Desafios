const $navbar_email = document.querySelector('.navbar-email')
const $menu_ham = document.querySelector('.menu')
const $desktop_menu = document.querySelector('.desktop-menu')
const $mobile_menu = document.querySelector('.mobile-menu')
const $shopping_button = document.querySelector('.navbar-shopping-cart')
const $product_detail = document.querySelector('.product-detail')
const $cards_container = document.querySelector('.cards-container')

const bikes = [
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
    }
]

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

const renderBikes = () => {
    let textInner = ''
    bikes.map( bike => {
        for (let i = 0; i < bike.cantidad; i++) {
            textInner += `
                <div class="product-card">
                    <img src="${bike.image}" alt="">
                    <div class="product-info">
                        <div>
                            <p>${bike.precio}</p>
                            <p>${bike.nombre}</p>
                        </div>
                        <figure>
                            <img src="./icons/bt_add_to_cart.svg" alt="">
                        </figure>
                    </div>
                </div>
            `
        }
    })
    $cards_container.innerHTML = textInner
}

