module.exports = function(sequelize, DataTypes) {
    var menu = sequelize.define("menu", {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      // categoriesId: DataTypes.INTEGER
    });
  
    menu.associate = function(models) {
      // Associating menu with Posts
      // When an menu is deleted, also delete any associated Posts
      menu.belongsTo(models.categories, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return menu;
  };
