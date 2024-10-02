import User from "./../../../models/User";
import mongoConnect from "./../../../libs/mongoConnect";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { generateToken } from "./../../../utils/jwt";

export async function POST(req: Request) {
  const { username, password } = await req.json();
  await mongoConnect();

  const user = await User.findOne({ username });
  if (!user)
    return NextResponse.json({ error: "Invalid credentials", status: 400 });

  const isCorrectPW = bcrypt.compare(password, user.password);
  if (!isCorrectPW)
    return NextResponse.json({ error: "Invalid credentials", status: 400 });

  const token = generateToken({ userId: user._id });
  const response = NextResponse.json({ token });

  // Set cookie with the token. `httpOnly`
  // ensures the token is only accessible via
  // the server (not JavaScript)

  response.cookies.set("token", token, {
    httpOnly: true, // Token is not accessible via JS
    secure: process.env.NODE_ENV === "production", // Ensure the cookie is sent only over HTTPS in production
    maxAge: 60 * 60 * 24, // Expires in 24 hours
    path: "/", // Cookie is accessible throughout the app
  });

  return response;
}
