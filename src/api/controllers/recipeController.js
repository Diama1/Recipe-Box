import cloudinary from 'cloudinary';
import db from '../../sequelize/models';

const { Recipe } = db;

/**
 * @author Diane Mahoro
 * @class Recipes
 * @description this class performs the whole Recipes
 */
class Recipes {
    /**
     *
     * @param {Object} req - Request object
     * @param {Object} res - Response object
     * @returns {Object} - Response object
     */
    static async createRecipe( req, res) {
        let uploadedImage;
        const { name, ingredient, direction } = req.body;
    
        if (req.file) {
          const image = await cloudinary.v2.uploader.upload(req.file.path);
          uploadedImage = image.secure_url;
        }
        const data = {
          name, uploadedImage, ingredient, direction
        };
        
        const response = await Recipe.findOne({
          where: {
            name
          }
    
        });
        if (!response) {
          const newRecipe = await Recipe.create({
            name: data.name,
            image: data.uploadedImage,
            ingredient: data.ingredient,
            direction: data.direction
          });
          return res.status(201).json({
            data: newRecipe,
            message: 'Recipe created successfully'
          });
        }
        res.status(409).json({
          Error: 'Recipe with that title exixt'
        })
      }

      /**
   *
   * @param {Object} req - Request object
   * @param {Object} res - Response object
   * @returns {Object} - Response object
   */
      static async getAllRecipe(req, res) {
        const allRecipes = await Recipe.findAll();
        if (!allRecipes[0]) return res.status(200).send({ message: 'Whoops! No Recipe found!' });
        res.status(200).send({
          recipes:allRecipes
        });
      }

      static async getOneRecipe(req, res) {
        const { id } = req.params;
        const recipe = await Recipe.findOne({
          where: {
            id
          }
        });
        res.status(200).send({
          recipe
        });
      }


      static async updateRecipe(req, res) {
        const { id } = req.params;
        const { name, ingredient, direction } = req.body;

        const data = {
          name, ingredient, direction
        };
    
        const response = await Recipe.findAll({
          where: { id }
        });
        console.log(response);
        if (response) {
          console.log(11111);
          const updatedRecipe = await Recipe.update(
            { name: data.name, ingredient: data.ingredient, direction: data.direction },
            { where: { id }, logging: false }
          );
          res.status(200).json({
            UpdatedRecipe: updatedRecipe,
            message: 'updated', 
          });
        }

      }
      static async deleteRecipe(req, res) {
        const { id } = req.params;
    
        await Recipe.destroy({
          where: {
            id
          }
        });
        res.status(200).json({
          message: 'the Recipe has been deleted successfully'
        });
      }

}

export default Recipes;
