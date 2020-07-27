$(document).ready(function() {
    // Getting references to the name input and author container, as well as the table body
    var menuType = $("#burgerMenu");
    var menuList = $("tbody");
    var menuContainer = $(".menu-container");

    // Getting the initial list of menus
    getMenu();

    // Function for creating a new list row for menu
  function createMenuRow(categoriesData) {
    var newTr = $("<tr>");
    newTr.data("categories", categoriesData);
    newTr.append("<td>" + categoriesData.name + "</td>");
    if (categoriesData.Menus) {
      newTr.append("<td> " + categoriesData.Menus.length + "</td>");
    } else {
      newTr.append("<td>0</td>");
    }
    // newTr.append("<td><a href='/blog?author_id=" + categoriesData.id + "'>Go to Posts</a></td>");
    // newTr.append("<td><a href='/cms?author_id=" + categoriesData.id + "'>Create a Post</a></td>");
    // newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>");
    // return newTr;
  }

    // Function for retrieving menus and getting them ready to be rendered to the page
    function getMenu() {
      $.get("/api/menu", function(data) {
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
          rowsToAdd.push(createMenuRow(data[i]));
        }
        renderMenuList(rowsToAdd);
        menuType.val("");
      });
    }
  
    // A function for rendering the list of menus to the page
    function renderMenuList(rows) {
      menuList.children().not(":last").remove();
      menuContainer.children(".alert").remove();
      if (rows.length) {
        console.log(rows);
        menuList.prepend(rows);
      }
      else {
        renderEmpty();
      }
    }
  });
  