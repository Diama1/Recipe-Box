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
        

        const response = await Recipe.findAll({
          where: {
            name
          }
    
        });
        if (!response[0]) {
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
      }
}

export default Recipes;
