import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
function jwtGenerator(id,role){
    const payload={
        user_id:id,
        user_role:role
    }
    return jwt.sign(payload,process.env.JWTSECRET,{expiresIn:"2hr"})
}
export default jwtGenerator;