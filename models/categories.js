module.exports = function(sequelize, DataTypes) {
    var categories = sequelize.define("categories", {
      title: DataTypes.STRING,
      description: DataTypes.STRING
      });
   
  
    categories.associate = function(models) {
      // We're saying that an menu item should belong to an categories
      // A menu item can't be created without an categories due to the foreign key constraint
      categories.hasMany(models.menus, {
        onDelete: "cascade"
      });

    };
  
    return categories;
  };