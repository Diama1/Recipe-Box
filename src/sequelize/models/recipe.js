'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    name: DataTypes.STRING,
    image: DataTypes.TEXT,
    ingredient: DataTypes.ARRAY(DataTypes.STRING),
    direction: DataTypes.TEXT
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
  };
  return Recipe;
};