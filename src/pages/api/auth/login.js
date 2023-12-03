import pool from "@/db/config";

export default async function handler(req,res){
   console.log(req.query)
    if (req.method == "GET"){
        try {
            const{nickname, password} = req.query;
            const connectDB = await pool;
            const [userInfo] = await connectDB.query("select name, role from user where nickname=?",[nickname])
            console.log(userInfo)
        } catch (error) {
            
        }
    }
    

    
}