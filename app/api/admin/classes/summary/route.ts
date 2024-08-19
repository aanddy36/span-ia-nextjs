import { getSummaryClasses } from "@/utils/getSummaryClasses";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const success = await getSummaryClasses();
    return Response.json({ success, error: "" }, { status: 200 });
  } catch (error) {
    return Response.json(
      { success: "", error: "Something went wrong" },
      { status: 500 }
    );
  }
}
