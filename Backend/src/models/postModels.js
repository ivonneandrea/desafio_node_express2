import pool from '../../database/connectionL.js';

const getPost = async () => {
    try {
        const { rows } = await pool.query('SELECT * FROM posts');
        return rows;
    } catch (error) {
        console.error("Error en getPost:", error);
        throw error;
    }
}

const createPost = async ({ titulo, img, descripcion }) => {
    try {
        const query = "INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *";
        const { rows } = await pool.query(query, [titulo, img, descripcion]);
        return rows[0];
    } catch (error) {
        console.error("Error en createPost:", error);
        throw error;
    }
};

const likePost = async ({ id }) => {
    try {
        const query = "UPDATE posts SET likes = COALESCE(likes, 0) + 1 WHERE id = $1 RETURNING *";
        const { rows } = await pool.query(query, [id]);
        return rows[0];
    } catch (error) {
        console.error("Error en likePost:", error);
        throw error;
    }
}

const deletePost = async ({ id }) => {
    try {
        const query = "DELETE FROM posts WHERE id = $1 RETURNING *";
        const { rows } = await pool.query(query, [id]);
        return rows[0];
    } catch (error) {
        console.error("Error en deletePost:", error);
        throw error;
    }
}
    

export { getPost, createPost, likePost, deletePost };