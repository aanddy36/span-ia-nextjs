import { getAllStudents } from "@/utils/getAllStudents";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const name = searchParams.get("name") as string;
  
  try {
    const students = await getAllStudents(name);
    return Response.json({ success: students, error: "" });
  } catch (error) {
    return Response.json(
      { success: "", error: "Something went wrong" },
      { status: 500 }
    );
  }
}
