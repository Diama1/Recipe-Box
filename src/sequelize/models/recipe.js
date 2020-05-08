'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    image: DataTypes.TEXT,
    ingredient: DataTypes.ARRAY(DataTypes.TEXT),
    direction: DataTypes.ARRAY(DataTypes.TEXT)
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
  };
  return Recipe;
};