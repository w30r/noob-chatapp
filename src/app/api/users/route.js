import mongoConnect from "@/app/libs/mongoConnect";
import User from "@/app/models/User";
import { signToken, verifyToken } from "@/middleware/jwtMiddleware";
import { NextResponse } from "next/server";

export async function GET(req) {
  // Verify JWT token
  const decoded = verifyToken(req);
  if (decoded instanceof Response) {
    // If token is invalid, return the unauthorized response
    return decoded;
  }

  await mongoConnect();
  const allUsers = await User.find();
  if (!allUsers) {
    return NextResponse.json({ message: "No users found" });
  }
  return NextResponse.json(allUsers);
}

export async function POST(request) {
  await mongoConnect();
  const { username, status, password } = await request.json();
  console.log("⭐username: ", username);
  console.log("⭐status: ", status);
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    console.log(`🚩 User ${username} already exists`);
    return NextResponse.json(
      { message: "Username already exists" },
      { status: 409 }
    );
  }
  const user = await User.create({ username, status, password });
  const token = signToken({ userId: user._id });
  return NextResponse.json({ user, token });
}
