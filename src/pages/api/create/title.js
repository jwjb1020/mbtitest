import pool from "@/db/config";

export default async function handler(req,res){
   try {
    if(!req.cookies.jwt){
        res.status(401).json({message : "Failed", error : "권한이 없습니다."})
    }
    
   } catch (error) {
    
   }
}