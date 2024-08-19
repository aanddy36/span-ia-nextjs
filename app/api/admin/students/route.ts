import { authenticateUser } from "@/utils/authenticateUser";
import { getAllStudents } from "@/utils/getAllStudents";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const name = searchParams.get("name") as string;

  try {
    const authResult = await authenticateUser(req, "clzt9uk730003laz18zjeo6c1");
    if (authResult) {
      return Response.json({ error: authResult, success: "" }, { status: 500 });
    }
  } catch (error) {
    console.log(error);
    return Response.json(
      { error: "Something went wrong", success: "" },
      { status: 500 }
    );
  }

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
