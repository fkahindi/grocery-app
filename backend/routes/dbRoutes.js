import express  from "express";

import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/Products.js';
/* import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from '../controllers/Users.js' */
const router = express.Router();

router.get('/',getAllProducts);
router.get('/:id',getProductById);
router.post('/',createProduct);
router.patch('/:id',updateProduct);
router.delete('/:id', deleteProduct);
/* router.get('/',getAllUsers);
router.get('/:id',getUserById);
router.post('/',createUser);
router.patch('/:id',updateUser);
router.delete('/:id', deleteUser); */

export default router;