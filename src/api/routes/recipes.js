import { Router } from 'express';
import RecipeController from '../controllers/recipeController';
import upload from '../../handlers/multer';


const router = Router();

const { createRecipe, getAllRecipe, getOneRecipe, updateRecipe, deleteRecipe } = RecipeController;

router.post('/', upload.single('image'), createRecipe);
router.get('/', getAllRecipe);
router.get('/:id', getOneRecipe);
router.put('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);


export default router;
