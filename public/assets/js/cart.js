


const cartItems = JSON.parse(localStorage.getItem('cart')) || []
const shoppingCartContent = $('#cartItems')
const clearCartBtn = $('#clear-cart');
const cartTotalPrice = $('#cart-price-total');
let totalPrice = 0

$(document).ready(function () {
    displayCart()
})

function displayCart() {
    const html = cartItems.map(x => buildItem(x)).join("")
    shoppingCartContent.empty().html(html)
    cartItems.forEach(function(value) {
        totalPrice += Number(value.price)
        cartTotalPrice.empty().html((totalPrice))
        console.log(typeof($('#cart-price-total')))
    })
    if (cartItems.length) {
        $("#notification-badge").show().text(cartItems.length)
    } else {
        $("#notification-badge").hide()
    }
}

function buildItem(menu) {console.log(menu.price)
    return `
<tr class="text-light cart-menu">
    <td class="cart-menu-title">
        ${menu.title}
    </td>
     <td class="cart-menu-price">
       $ ${menu.price}
    </td>
     <td class="cart-menu-remove">
        <button onclick="removeItem(event)" class="ml-auto" data-itemId="${menu.id}">X</button>
    </td>
</tr>

`;
}

function removeItem(e) {
    const _id = parseInt($(e.target).attr('data-itemId'))
    const _index = cartItems.findIndex(x => x.id === _id)

    cartItems.splice(_index, 1)
    localStorage.setItem('cart', JSON.stringify(cartItems))

    displayCart()
}

function buyItem(e) {
    if (e.target.classList.contains("add-to-cart")) {
        //read the menu value
        const menu = e.target.parentElement.parentElement;
        getMenuInfo(menu);
       
    }
}


function getMenuInfo(menu) { 
    //create an Object with menu data
    const menuInfo = {
        // image: menu.querySelector('img').src,
        title: menu.querySelector('h4').textContent,
        price: menu.querySelector('.price span').textContent,
        id: menu.querySelector('a').getAttribute('data-id')
    }
    addToCart(menuInfo);
}

// function totalPrice (menu)



function clearCart() {
    console.log(shoppingCartContent.firstChild)
    while (shoppingCartContent.firstChild) {
        shoppingCartContent.removeChild(shoppingCartContent.firstChild);
    }
}