import express from "express";
import { getAllPosts, createOnePost, likeOnePost, deleteOnePost } from "../src/controllers/postController.js";

const router = express.Router();

router.get('/posts', getAllPosts);
router.post('/posts', createOnePost);
router.put('/posts/like/:id', likeOnePost);
router.delete('/posts/:id', deleteOnePost)

export default router;