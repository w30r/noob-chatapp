import mongoConnect from "@/app/libs/mongoConnect";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoConnect();
  const allUsers = await User.find();
  if (!allUsers) {
    return NextResponse.json({ message: "No users found" });
  }
  return NextResponse.json(allUsers);
}

export async function POST(request) {
  await mongoConnect();
  const { username, status } = await request.json();
  console.log(username);
  console.log("status", status);
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return NextResponse.json(
      { message: "Username already exists" },
      { status: 409 }
    );
  }
  const user = await User.create({ username });
  return NextResponse.json(user);
}
