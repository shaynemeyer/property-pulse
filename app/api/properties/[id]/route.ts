import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/database";
import Property from "@/models/Property";

interface ParamsProps {
  params: {
    id: string;
  };
}

// GET /api/properties
export const GET = async (
  request: NextRequest,
  { params: { id } }: ParamsProps
) => {
  try {
    await connectDB();

    const property = await Property.findById(id);

    if (!property)
      return new NextResponse("Property not found", {
        status: 404,
      });

    return new NextResponse(JSON.stringify(property), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong", {
      status: 500,
    });
  }
};
