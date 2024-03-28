import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json([{ name: "abir", role: "admin" },{ name: "abir2", role: "admin2" }]);
}
