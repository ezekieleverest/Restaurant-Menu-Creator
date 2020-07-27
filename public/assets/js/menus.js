$(document).ready(function () {
    function getMenu() {
        $.get("/api/menu", function (data) {
            // take all the data, loop over it (aka a map) and return html
            let htmledData = data.map(item => {

                // console.log(item)
                return createMenuSpot(item)
                
            });
            // console.log(htmledData)
            // console.log(htmledData)
            htmledData = htmledData.join('');
            // console.log(htmledData)
            // htmledData = JSON.stringify(htmledData)
            $('#menu-target').empty().append(htmledData);
        });
    }

    function createMenuSpot(menuData) {
        console.log(menuData)
        let html= 
        `<div class="card m-2 bg-dark border-danger rounded-sm" data-itemId=${menuData.id}>
            <div class="card-body">
                <h5 class="card-title text-white">
                    ${menuData.title}
                </h5>
                <h6 class="card-subtitle text-white">
                    ${menuData.price}
                </h6>
                <p class="card-text text-white">
                    ${menuData.description}
                </p>
            </div>
        </div>`;

        return html;
    }
    getMenu()
    $(document).on("click", ".card", function(e) {
        e.preventDefault();
        // console.log(this.getAttribute('data-itemId'))
    })
})