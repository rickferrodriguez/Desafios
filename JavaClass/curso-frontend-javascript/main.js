const $navbar_email = document.querySelector('.navbar-email')
const $menu_ham = document.querySelector('.menu')
const $shopping_button = document.querySelector('.navbar-shopping-cart')
const $cards_container = document.querySelector('.cards-container')

// etiqueta <a> menú superior desktop
const $clothes_el = document.querySelector('#clothes-el')
const $toys_el = document.querySelector('#toys-el')
const $all_el = document.querySelector('#all-el')

// etiqueta <a> menú amburguesa mobile
const $clothes_mobile = document.querySelector('#clothes-mobile')
const $toys_mobile = document.querySelector('#toys-mobile')
// ventanas activables
const $product_detail_onc = document.querySelector('.product-detail-onc')
const $product_detail = document.querySelector('.product-detail')
const $desktop_menu = document.querySelector('.desktop-menu')
const $mobile_menu = document.querySelector('.mobile-menu')

// trae a todos los elementos del DOM que tengan la clase flotante dentro de un array 
const activables = document.querySelectorAll('.flotante')

const products = [
    {
        "id": 0,
        "nombre": "bike",
        "precio": 120,
        "image": "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "cantidad": 4,
        "categoria": "toys"
    },
    {
        "id": 1,
        "nombre": "bike",
        "precio": 120,
        "image": "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "cantidad": 4,
        "categoria": "toys"
    },
    {
        "id": 2,
        "nombre": "bike",
        "precio": 120,
        "image": "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "cantidad": 4,
        "categoria": "toys"
    },
    {
        "id": 3,
        "nombre": "Adult Trike",
        "precio": 220,
        "image": "https://images.pexels.com/photos/957157/pexels-photo-957157.jpeg?auto=compress&cs=tinysrgb&w=650&h=940&dpr=1",
        "cantidad": 2,
        "categoria": "toys"
    },
    {
        "id": 4,
        "nombre": "shirt",
        "precio": 20,
        "image": "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "cantidad": 4,
        "categoria": "clothes"
    },
    {
        "id": 5,
        "nombre": "shirt",
        "precio": 20,
        "image": "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "cantidad": 4,
        "categoria": "clothes"
    },
    {
        "id": 6,
        "nombre": "shirt",
        "precio": 20,
        "image": "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "cantidad": 4,
        "categoria": "clothes"
    },
    {
        "id": 7,
        "nombre": "shirt",
        "precio": 20,
        "image": "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "cantidad": 4,
        "categoria": "clothes"
    },
    {
        "id": 9,
        "nombre": "bike",
        "precio": 22,
        "image": "https://images.pexels.com/photos/957157/pexels-photo-957157.jpeg?auto=compress&cs=tinysrgb&w=650&h=940&dpr=1",
        "cantidad": 2,
        "categoria": "toys"
    },
]

const formatoPrecio = (num) => {
    return num.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    })
}

const esconderEmergentes = () => {
    activables.forEach(activable => {
        activable.classList.add('inactive')
    })
}

const mostrarEsconder = (ele) => {
    if (ele.classList.contains('inactive')) {
        esconderEmergentes()
        ele.classList.remove('inactive')
        return
    } else {
        ele.classList.add('inactive')
    }
}

const esconderDetalleProduto = () => {
    if ($product_detail_onc.classList.contains('inactive')) {
        esconderEmergentes()
        $product_detail_onc.classList.remove('inactive')
        return
    } else {
        $product_detail_onc.classList.add('inactive')
    }
}

$navbar_email.addEventListener('click', () => {
    mostrarEsconder($desktop_menu)
})


$menu_ham.addEventListener('click', () => {
    mostrarEsconder($mobile_menu)
})

$shopping_button.addEventListener('click', () => {
    mostrarEsconder($product_detail)
})

// Opciones menú Desktop
$all_el.addEventListener('click', (event) => {
    const value = event.target.getAttribute('data-value')
    mappedProducts(value)
})
$clothes_el.addEventListener('click', (event) => {
    const value = event.target.getAttribute('data-value')
    mappedProducts(value)
})

$toys_el.addEventListener('click', (event) => {
    const value = event.target.getAttribute('data-value')
    mappedProducts(value)
})

// Opciones menú mobile
$clothes_mobile.addEventListener('click', (event) => {
    const value = event.target.getAttribute('data-value')
    mappedProducts(value)
    mostrarEsconder($mobile_menu)
})

$toys_mobile.addEventListener('click', (event) => {
    const value = event.target.getAttribute('data-value')
    mappedProducts(value)
    mostrarEsconder($mobile_menu)
})


const mappedProducts = (value) => {
    // const elProducto = products.filter(producto => producto.nombre === value)
    const elProducto = products.filter(product => product.categoria === value)
    if (value === 'all') {
        renderProduct(products)
        return
    }

    renderProduct(elProducto)
}

const renderProduct = (arra) => {
    let textInner = ''
    arra.map(ele => {
        textInner += `
                <div class="product-card" onclick="cardClick(${ele.id})">
                    <img src="${ele.image}" alt="">
                    <div class="product-info">
                        <div>
                            <p>${formatoPrecio(ele.precio)}</p>
                            <p>${ele.nombre}</p>
                        </div>
                        <figure class="figure-add-to-cart" >
                            <img src="./icons/bt_add_to_cart.svg" alt="">
                        </figure>
                    </div>
                </div>
            `
    })
    $cards_container.innerHTML = textInner
}

const cardClick = (valor) => {
    let indice = products.findIndex((product) => product.id === valor);
    mostrarEsconder($product_detail_onc)
    $product_detail_onc.innerHTML = `
            <div class="product-detail-onc-close" onclick="esconderDetalleProduto()">
                <img src="./icons/icon_close.png" alt="close"  >
            </div>
            <img src="${products[indice].image}" alt="bike">
            <div class="product-info-onc">
                <p>${formatoPrecio(products[indice].precio)}</p>
                <p>${products[indice].nombre}</p>
                <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
                <button class="primary-button add-to-cart-button">
                    <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
                        Add to cart
                </button>
            </div>
    `
}

