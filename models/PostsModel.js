const db = require("./conn");



class PostsModel {
    constructor(id, content) {
        this.id = id;
        this.content = content;
    }


    static async getAllPosts() {
        try {
        const response = await db.any((`SELECT * FROM posts;`))
        return response;
        } catch (error) {
            return error.message;
        }
    }

}



module.exports = PostsModel;