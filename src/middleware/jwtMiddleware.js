import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';


export function verifyToken(req) {
  // Get token from Authorization header
  const authHeader = req.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const token = authHeader.split(' ')[1]; // Get the token part

  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded; // Return decoded payload if valid
  } catch (error) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }
}

export function signToken(payload) {
  // Generate a token
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}
