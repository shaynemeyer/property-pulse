import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/database";
export const GET = async (request: NextRequest) => {
  try {
    await connectDB();

    return new NextResponse(JSON.stringify({ message: "Hello, world!" }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong", {
      status: 500,
    });
  }
};
