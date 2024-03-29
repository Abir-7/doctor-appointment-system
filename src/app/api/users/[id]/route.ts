import { NextRequest, NextResponse } from "next/server";

interface ID{
   params:{ id:string|number}
}

export async function GET(req: NextRequest,{params:{id}}:ID) {
  return NextResponse.json({ name: "abir", role: "admin" ,id});
}