const express = require("express");
const router = express.Router();

const PostsModel = require("../models/PostsModel");




router.get("/all", async (req, res) => {
    const postsData = await PostsModel.getAllPosts();
    console.log("post data is", postsData);
    
    res.json(postsData)
})



module.exports = router;