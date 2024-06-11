import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties
export const GET = async (request: NextRequest) => {
  try {
    await connectDB();

    const properties = await Property.find({});

    return new NextResponse(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong", {
      status: 500,
    });
  }
};
