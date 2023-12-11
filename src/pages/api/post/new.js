import jwt from "jsonwebtoken"
import pool from "@/db/config";

export default async function handler(request, response) {
    if(request.method == "POST") {

        // jwt token 가지고 오기
        const token = request.cookies.jwt;
        // jwt decoding
        const decodedToken = jwt.verify(token, "test")
        // console.log(decodedToken)

        request.body = JSON.parse(request.body)

        let newPost = {
            user_id: decodedToken.userID,
            title: request.body.title,
            content: request.body.content,
            author: decodedToken.nickname
        } 
        
        // db connection
        const connectDB = await pool;

        try {
            // Insert new post into the 'post' table using the execute method
            const [result] = await connectDB.query(
                'INSERT INTO post SET ?',
                [newPost]
            );
            console.log('Post saved: ', result)
            response.status(200).json({ success: true, message: 'Post saved successfully' })

        } catch(error) {
            console.error('Error saving post: ', error)
            response.status(500).json({ success: false, message: 'Internal server error'})
        } finally {
            // Close the Mysql connection
            await connectDB.end()
        }        
    }
}