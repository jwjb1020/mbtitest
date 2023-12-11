import pool from "@/db/config";

export default async function handler(request, response) {
    try {
        if (request.method == "GET") {
            // console.log(request.query.postId);
            const postId = request.query.postId;

            const connectDB = await pool;
            const [detailedPost] = await connectDB.query(
                "SELECT * FROM post where post_id=?",
                postId
            );

            response.status(200).json({ message: "success", detailedPost });
        }
    } catch (error) {
        console.error("Failed to get Detailed post information", error);
        response
            .status(500)
            .json({ success: false, message: "Internal server error" });
    }
}
