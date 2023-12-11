import pool from "@/db/config";

export default async function handler(request, response) {
    
    try {
        if (request.method == "GET") {
            // db connection
            const connectDB = await pool;
            // ask all of post table's data
            const [postList] = await connectDB.query("SELECT * FROM post");
    
            response.status(200).json({ message: "success", postList });
        }
    } catch(error) {
        console.error('Failed to get data', error)
        response.status(500).json({ sucess: false, message: "Internal server error" })
    }     
}
