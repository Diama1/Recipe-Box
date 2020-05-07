'use strict';

module.exports = function (sequelize, DataTypes) {
  var Recipe = sequelize.define('Recipe', {
    name: DataTypes.STRING,
    ingredient: DataTypes.ARRAY(DataTypes.STRING)
  }, {});

  Recipe.associate = function (models) {// associations can be defined here
  };

  return Recipe;
};
//# sourceMappingURL=recipe.js.map