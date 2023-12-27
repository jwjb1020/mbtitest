import pool from "@/db/config";

export default async function handler(request, response) {
    try {
        const noticeId = request.query.noticeId;
        const connectDB = await pool;
        const [detailedNotice] = await connectDB.query(
            "SELECT * FROM notice where notice_id=?",
            noticeId
        );

        response
            .status(200)
            .json({
                success: true,
                message: "The list of notice is well-extracted",
                detailedNotice,
            });
    } catch (error) {
        console.error("Failed to get Detailed notice information", error);
        response
            .status(500)
            .json({ success: false, message: "Internal server error" });
    }
}
