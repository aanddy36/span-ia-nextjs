import { authenticateUser } from "@/utils/authenticateUser";
import { getTimeSeries } from "@/utils/getTimeSeries";

export async function GET(req: Request) {
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
    const timeSeries = await getTimeSeries();
    return Response.json({ success: timeSeries, error: "" });
  } catch (error) {
    return Response.json(
      { success: "", error: "Something went wrong" },
      { status: 500 }
    );
  }
}