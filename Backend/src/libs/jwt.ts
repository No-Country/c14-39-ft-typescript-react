import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

const { TOKEN_SECRET } = process.env;

interface TokenPayload {
  userId: string;
}

export const createToken = (payload: TokenPayload) => {
  return new Promise<string>((resolve, reject) => {
    if (typeof payload !== 'object' || Array.isArray(payload) || payload === null) {
      reject(new Error('Invalid payload format'));
      return;
    }

    jwt.sign(payload, TOKEN_SECRET as string, { expiresIn: "7d" }, (error, token) => {
      if (error) {
        console.log(error);
        reject(error);
      }
      if (!token) {
        reject(new Error('Token generation failed for an unknown reason'));
        return;
    }
      resolve(token);
    });
  });
};
