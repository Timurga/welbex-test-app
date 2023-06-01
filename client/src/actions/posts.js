import axios from "axios"

export const getPosts = async () => {
    return await axios.get(`http://localhost:5000/post/getPosts`)
        .then((response) => response.data)
}

export const createPost = async (text, author) => {
    const response = await axios.post(`http://localhost:5000/post/createPost`, { text, author })
    console.log(response.data);
}

export const deletePost = async (id, author, username) => {
    const response = await axios.delete(`http://localhost:5000/post/deletePost`, { data: { id: id, author: author, username: username } })
    console.log(response.data);
}

export const editPost = async (id, author, content, username) => {
    const response = await axios.put(`http://localhost:5000/post/editPost`, { id, author, content, username })
    console.log(response.data);
}