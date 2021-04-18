let posts = new Map(); //It's like an array
const UUID = require('uuid');


let createPost = (obj)=>{
    let post = {
        id:UUID.v4(),
        date: new Date(),
        name:obj.name,
        description:obj.description
    };

    posts.set(post.id,post);
    return post;
};

let getPosts = () =>{
    return [...posts.values()]
};

let getPost = (id) =>{
    return posts.get(id);
};

module.exports = {
    createPost,
    getPosts,
    getPost
};