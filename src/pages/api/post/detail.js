import pool from "@/db/config";

export default function handler(request, response) {

    try {
        if(request.method == "")
        const connectDB = 

    } catch(error) {
        console.error('Failed to get Detailed post information', error)
        response.status(500).json({ success : false, message: "Internal server error"})
    }
}