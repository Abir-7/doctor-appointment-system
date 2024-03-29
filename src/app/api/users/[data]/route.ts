import connectDB from "@/lib/Database/Connection";
import UserModel from "@/MongooseModels/UserModel";
import { NextRequest, NextResponse } from "next/server";

interface ID{
   params:{ data:string|number}
}

export async function GET(req: NextRequest,{params:{data}}:ID) {
 await connectDB()

 const user= await UserModel.findOne({email:data})
  

  return NextResponse.json(user);
}