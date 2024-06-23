import { getPost, createPost, likePost, deletePost } from "../models/postModels.js";

const getAllPosts = async(req, res) => {
    try {
        const posts = await getPost();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: "Error al procesar la solicitud" });
        console.error("Error al leer la solicitud:", error);
    }
};

const createOnePost = async(req, res) => {
    try {
        const { titulo, img, descripcion } = req.body;
        const post = await createPost({ titulo, img, descripcion });
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: "Error al procesar la solicitud" });
        console.error("Error al crear la solicitud:", error);
    }
};

const likeOnePost = async(req, res) => {
    try {
        const { id } = req.params;
        const updatedPost = await likePost({ id });
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ error: "Error al procesar la solicitud" });
        console.error("Error al actualizar la solicitud:", error);
    }
}

const deleteOnePost = async(req, res) => {
    try {
        const { id } = req.params;
        const deletedPost = await deletePost({ id });
        res.status(200).json(deletedPost);
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar la solicitud" });
    }
}

export { getAllPosts, createOnePost, likeOnePost, deleteOnePost };