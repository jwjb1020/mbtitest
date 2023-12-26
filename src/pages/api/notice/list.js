export default async function handler(request, response) {
    try {
        if(request.method == "GET") {
            
        }
    } catch (error) {
        console.log("Failed to get data", error);
        response
            .status(500)
            .json({ success: false, message: "Internal server error" });
    }
}
