import { connectMongoDB } from "@/lib/mongodb";
import Soildata from "@/models/soildata";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { soilname, description, distributorName, distributorContact} = await req.json();
    await connectMongoDB();
    await Soildata.create({ soilname, description, distributorName, distributorContact});

    return NextResponse.json({ message: "Data created." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the data." },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    await connectMongoDB();
    const result = await Soildata.find();
    return NextResponse.json({ result: result }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Something went wrong" }, { status: 400 });
  }
}
