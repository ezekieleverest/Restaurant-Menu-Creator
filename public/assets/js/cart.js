loadEventListeners();

function loadEventListeners(){
    //when new item is added
    menus.addEventListener("click", buyItem);

function buyItem(e){
    if(e.target.classList.contains("add-to-cart")){
        //read the menu value
     const menu = e.target.parentElement.parentElement;
        getMenuInfo(menu);
    }
}}

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
function addToCart(menuInfo){
    const row = document.createElement('#cart-target');

    row.innerHTML = `
<tr>
    <td>
        ${menu.title}
    </td>
     <td>
        ${menu.price}
    </td>
     <td>
        <a href="#" class="remove" data-id="${menu.id}">X</a>
    </td>
</tr>
`
    ;

    shoppingCartContent.appendChild(row);
}

shoppingCartContent = document.querySelector('#cart-content tbody'),
clearCartBtn = document.querySelector('#clear-cart');
loadEventListeners();

function loadEventListeners(){
    //when new item is added
    menus.addEventListener('click', buyItem);
    shoppingCartContent.addEventListener('click', removeItem);
    clearCartBtn.addEventListener('click', clearCart);
}
function removeItem(e){
    if(e.target.classList.contains('remove')){
         e.target.parentElement.parentElement.remove();
    }
}

function clearCart(){
    console.log(shoppingCartContent.firstChild)
    while(shoppingCartContent.firstChild){
        shoppingCartContent.removeChild(shoppingCartContent.firstChild);
    }
}