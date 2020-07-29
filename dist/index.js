$(document).ready(function(){function a(a){let b=`<div class="card" data-itemId=${a.id}>
        <div class="card-body">
            <h5 class="card-title">
                ${a.title}
            </h5>
            <h6 class="card-subtitle">
                ${a.price}
            </h6>
            <p class="card-text">
                ${a.description}
            </p>
            <div class="itemId">
                ${a.id}
            </div>
        </div>
    </div>`;return b}$("#addItemForm").on("submit",function(a){a.preventDefault();var b={title:$("#addItemTitle").val().trim(),price:$("#addItemPrice").val().trim(),description:$("#addItemDesc").val().trim()};Object.values(b).some(a=>!a)||API.addMenuItem(b).then(()=>window.location.replace("/menu")).catch(function(a){console.log(a.message)})});(function(){API.getMenu().then(function(b){let c=b.map(b=>a(b));c=c.join(""),$("#menu-target").empty().append(c)}).catch(function(a){console.log(a.message)})})(),$(document).on("click",".card",function(a){a.preventDefault(),console.log(this.getAttribute("data-itemId"))})});