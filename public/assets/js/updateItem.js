let MenuItems = [];
let MenuID = 0;

$(document).ready(function () {
    getMenu()

    $("#itemId").on("change", selectItem)
    $("#updateForm").on("submit", updateMenuItem)
})

function getMenu() {
    API.getMenu()
        .then(function (response) {
            MenuItems = response;
            response.forEach(item => {
                const option = $("<option>")
                option.val(item.id)
                option.text(item.title)
                option.addClass("bg-dark, text-light")
                $("#itemId").append(option)
            })
        })
        .catch(function (err) {
            console.warn(err.message)
        })
}

function selectItem() {
    MenuID = parseInt($(this).val())
    const MenuItem = MenuItems.find(x => x.id === MenuID)
    $("#itemTitle").val(MenuItem.title)
    $("#itemPrice").val(MenuItem.price)
    $("#itemDescription").val(MenuItem.description)
}

function updateMenuItem() {
    const updateitem = {
        id: MenuID,
        title: $("#itemTitle").val(),
        price: $("#itemPrice").val(),
        description: $("#itemDescription").val()
    }
    API.updateMenuItem(updateitem)
        .then(function () {
            window.location.reload()
        })
        .catch(function (err) {
            console.warn(err.message)
        })
}

