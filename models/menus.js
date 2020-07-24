module.exports = function(sequelize, DataTypes) {
    var menus = sequelize.define("menus", {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      // categoriesId: DataTypes.INTEGER
    });
  
    menus.associate = function(models) {
      // Associating menu with Posts
      // When an menu is deleted, also delete any associated Posts
      menus.belongsTo(models.categories, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return menus;
  };
