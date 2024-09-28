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
