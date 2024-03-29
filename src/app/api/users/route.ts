import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import UserModel from "@/MongooseModels/UserModel";
import connectDB from "@/lib/Database/Connection";
export async function GET(req: NextRequest) {
  return NextResponse.json([
    { name: "abir", role: "admin" },
    { name: "abir2", role: "admin2" },
  ]);
}

export async function POST(req: NextRequest) {
  try {

    await connectDB();

    const body = await req.json();

    if (body.password !== body.confirmPassword) {
      return NextResponse.json(
        { data: "", err: "password not match" },
        { status: 403 }
      );
    }

    const findUser = await UserModel.findOne({ email: body.email });

    if (findUser)
      return NextResponse.json(
        { data: "", err: "already exist" },
        { status: 409 }
      );

    const hashedPassword = await bcrypt.hash(body.password, 10);
    const data = { ...body, password: hashedPassword};

    const newUser = new UserModel(data);
    await newUser.save();

    return NextResponse.json({ data: body, err: "" }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
