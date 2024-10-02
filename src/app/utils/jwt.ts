import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export function generateToken(payload: object, expiresIn: string = "1m") {
  // Generate a token
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
}

export function verifyToken(token: string) {
  // Verify token
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    console.error(err);
    return null;
  }
}
