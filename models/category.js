module.exports = function(sequelize, DataTypes) {
    var category = sequelize.define("category", {
      title: DataTypes.STRING,
      description: DataTypes.STRING
      });
   
  
    category.associate = function(models) {
      // We're saying that an menu item should belong to an Category
      // A menu item can't be created without an Category due to the foreign key constraint
      category.hasMany(models.menu, {
        onDelete: "cascade"
      });

    };
  
    return category;
  };