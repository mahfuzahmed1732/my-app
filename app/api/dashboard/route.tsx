import 'dotenv/config';
import { NextResponse } from "next/server";
import { menus } from "@/db/schema";
import { db } from "@/db";


export async function GET() {
  try {
    const data = await db.select().from(menus);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch menus" },
      { status: 500 }
    );
  }
}

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { title, href, parentId, order } = body;

    const menu: typeof menus.$inferInsert = {
      title,
      href,
      parentId: parentId || null,
      order,
    };

    // 🔥 returning use করো
    const result = await db.insert(menus).values(menu);

    console.log("Inserted:", result);

    return NextResponse.json({
      success: true,
      data: result,
      message: "data inserted successfully",
    });

  } catch (error: any) {
    console.error("ERROR:", error);

    return NextResponse.json({
      success: false,
      message: error.message || "something went wrong",
    });
  }
};