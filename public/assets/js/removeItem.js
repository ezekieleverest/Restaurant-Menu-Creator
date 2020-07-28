// function removeItem(itemId) {
//     var item = $(".itemId")
//     item.parentNode.removeChild(item)
// }
let MenuItems = [];
let MenuID = 0;


$(document).ready(function () {
    getMenu()

    $("#itemId").on("change", selectItem)
    $(".removeItemForm").on("submit", removeItem)
})

function getMenu() {
    API.getMenu()
        .then(function (response) {
            console.log(response + "response")
            MenuItems = response;
            response.forEach(item => {
                const option = $("<option>")
                option.val(item.id)
                option.text(item.title)
                option.addClass("bg-dark, text-light")
                $("#itemId").append(option)
                // console.log(MenuItems)
            })
        })
        .catch(function (err) {
            console.warn(err.message)
        })
}

function selectItem() {
    MenuID = parseInt($(this).val())
    
    const MenuItem = MenuItems.find(x => x.id === MenuID)
    console.log(MenuItem)
    $("#itemTitle").val(MenuItem.title)
    $("#itemPrice").val(MenuItem.price)
    $("#itemDescription").val(MenuItem.description)
 
}

function removeItem() {
    // const itemRmv = {
    //     id: MenuID,
        // title: $("#itemTitle").val(),
        // price: $("#itemPrice").val(),
        // description: $("#itemDescription").val()
    // }
    console.log(MenuID)
    API.removeItem(MenuID)
        .then(function () {
            window.location.reload()
        })
        .catch(function (err) {
            console.warn(err.message)
        })
}


