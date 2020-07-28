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
    const deleteItem = {
        id: MenuID,
        // title: $("#itemTitle").val().trim(),
        // price: $("#itemPrice").val().trim(),
        // description: $("#itemDescription").val().trim()
    }
    API.removeItem(deleteItem)
        .then(function () {
            window.location.reload()
        })
        .catch(function (err) {
            console.warn(err.message)
        })
}





