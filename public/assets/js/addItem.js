$(document).ready(function () {
var nameInput = $(".card-title")
    
$(document).on("submit", "#addItemBtn", newItemSubmit);

function newItemSubmit(event) {
    console.log(event);
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!nameInput.val().trim().trim()) {
      return;
    }
    upsertItem({
      name: nameInput
        .val()
        .trim()
    });
  }
  function upsertItem(menuData) {
    $.post("/api/admin", menuData)
      .then(getMenu);
  }

  function getMenu() {
    $.get("/api/menu", function (data) {
        // take all the data, loop over it (aka a map) and return html
        let htmledData = data.map(item => {

            // console.log(item)
            return createMenuSpot(item)
            
        });
        console.log(htmledData)
        // console.log(htmledData)
        htmledData = htmledData.join('');
        console.log(htmledData)
        // htmledData = JSON.stringify(htmledData)
        $('#menu-target').empty().append(htmledData);
    });
}

function createMenuSpot(menuData) {
    console.log(menuData)
    let html= 
    `<div class="card" data-itemId=${menuData.id}>
        <div class="card-body">
            <h5 class="card-title">
                ${menuData.title}
            </h5>
            <h6 class="card-subtitle">
                ${menuData.price}
            </h6>
            <p class="card-text">
                ${menuData.description}
            </p>
            <div class="itemId">
                ${menuData.id}
            </div>
        </div>
    </div>`;

    return html;
}
getMenu()
$(document).on("click", ".card", function(e) {
    e.preventDefault();
    console.log(this.getAttribute('data-itemId'))
})
})