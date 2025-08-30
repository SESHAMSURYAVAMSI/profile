import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio"); // make sure your DB name matches .env
    const col = db.collection("messages");

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    await col.insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      message: "✅ Saved successfully",
    });
  } catch (error) {
    console.error("❌ Error saving message:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
