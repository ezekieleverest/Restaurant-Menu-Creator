const API = {
    getMenu: function () { return $.get("/api/menu") },
    addMenuItem: function (data) {
        return $.post("/api/admin", data)
    },
    updateMenuItem: function (data) {
        return $.ajax({ url: "/api/admin", method: "PUT", data })
    },
    removeItem: function (data) {
        return $.ajax({url: `/api/admin/${data}`, method: "DELETE"})
    }
}