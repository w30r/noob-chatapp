import User from "./../../../models/User";
import mongoConnect from "./../../../libs/mongoConnect";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { generateToken } from "./../../../utils/jwt";

export async function POST(req: Request) {
  // Get from request body
  const { username, password } = await req.json();
  // Connect to mongo
  await mongoConnect();

  // Check if user exists
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return NextResponse.json(
      { error: "Username already exists" },
      { status: 409 }
    );
  }

  // Hash the pw + save to db
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, password: hashedPassword });

  // Generate JWT
  const token = generateToken({ userId: user._id, username: user.username });

  return NextResponse.json({ token });
}
