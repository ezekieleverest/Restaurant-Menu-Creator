const menuItems = []
const cartItems = JSON.parse(localStorage.getItem("cart")) || []

$(document).ready(function () {
    getMenu()
    displayNotifications()


    $(document).on("click", ".card", function (e) {
        e.preventDefault();
        // console.log(this.getAttribute('data-itemId'))
    })
})

function displayNotifications() {
    if (cartItems.length) {
        $("#notification-badge").show().text(cartItems.length)
    } else {
        $("#notification-badge").hide()
    }
}

function getMenu() {
    $.get("/api/menu", function (data) {
        menuItems.push(...data)
        // take all the data, loop over it (aka a map) and return html
        let htmledData = data.map(item => createMenuSpot(item)).join('');
        // console.log(htmledData)
        // console.log(htmledData)
        // console.log(htmledData)
        // htmledData = JSON.stringify(htmledData)
        $('#menu-target').empty().append(htmledData);
    });
}

function addCart(event) {
    console.log("hit")
    const _id = parseInt($(event.target).attr('data-itemId'))
console.log(_id)
    const item = menuItems.find(x => x.id === _id)
    console.log(item)
    cartItems.push(item)
    console.log(cartItems)
    localStorage.setItem('cart', JSON.stringify(cartItems))
    $("#notification-badge").show().text(cartItems.length)
}

function createMenuSpot(menuData) {
    return `<div class="card m-2">
            <div class="card-body text-center">
                <h5 class="card-title text-white">
                    ${menuData.title}
                </h5>
                <h6 class="card-subtitle text-white">
                    ${menuData.price}
                </h6>
                <p class="card-text text-white">
                    ${menuData.description}
                </p>
                <button class="bg-danger" onclick="addCart(event)" data-itemId=${menuData.id}>Add to Cart</button>
            </div>
        </div>`;
<<<<<<< HEAD

        return html;
    }
    getMenu()
    $(document).on("click", ".card", function(e) {
        e.preventDefault();
        // console.log(this.getAttribute('data-itemId'))
    })

    
})
=======
}
>>>>>>> f7c228d69d9da519b1143221881c47d5b317e852
