module.exports = function(sequelize, DataTypes) {
    var menu = sequelize.define("menu", {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      category: DataTypes.STRING
    });
  
    menu.associate = function(models) {
      // Associating menu with Posts
      // When an menu is deleted, also delete any associated Posts
      menu.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };
  
    return menu;
  };