import { Router } from 'express';
import RecipeController from '../controllers/recipeController';
import upload from '../../handlers/multer';


const router = Router();

const { createRecipe, getAllRecipe, getOneRecipe } = RecipeController;

router.post('/', upload.single('image'), createRecipe);
router.get('/', getAllRecipe);
router.get('/:id', getOneRecipe);

export default router;
