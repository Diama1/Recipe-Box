import { Router } from 'express';
import RecipeController from '../controllers/recipeController';
import upload from '../../handlers/multer';


const router = Router();

const { createRecipe } = RecipeController;

router.post('/', upload.single('image'), createRecipe);

export default router;
