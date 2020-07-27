$(document).ready(function () {
    function getMenu() {
        $.get("/api/menu", function (data) {
            // take all the data, loop over it (aka a map) and return html
            let htmledData = data.map(item => {
                // item = JSON.stringify(item)

                return createMenuSpot(item)
            // console.log(item) 
            });
            // console.log(htmledData)
            htmledData = htmledData.join('');
            console.log(htmledData);
            // htmledData = JSON.stringify(htmledData)
            $('#menu-target').empty().append(htmledData);
        });
    }

    function createMenuSpot(menuData) {

        // console.log(menuData)
        var itemSpot = $("<div>").addClass("card").attr("style", "width: 18rem")
        var itemBox = $("<div>").addClass("card-body")
        itemSpot.append(itemBox)
        var itemTitle = $("<h5>").addClass("card-title")
        itemTitle.data("title", menuData.title)
        var itemPrice = $("<h6>").addClass("card-subtitle mb-2 text-muted")
        itemPrice.data("price", menuData.price)
        var itemDesc = $("<p>").addClass("card-text")
        itemDesc.data("description", menuData.description)
        var itemId = $("<div>").addClass("itemId")
        itemId.data("id", menuData.id)
        itemBox.append(itemTitle, itemPrice, itemDesc, itemId)
        console.log(itemSpot);
        console.log(itemBox);
        return itemSpot
        
    }
    getMenu()
})