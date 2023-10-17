import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const { TOKEN_SECRET } = process.env;

export const createToken = (payload: object) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, TOKEN_SECRET as string, { expiresIn: "7d" }, (error, token) => {
            if (error) {
                console.log(error);
                reject(error);
            }
            resolve(token);
        });
    })
};