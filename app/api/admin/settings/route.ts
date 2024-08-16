import { getConfiguration } from "@/utils/getConfiguration";


export async function GET(req: Request) {
  try {
    const settings = await getConfiguration()
    if (!settings) {
      return Response.json(
        { success: "", error: "Something went wrong" },
        { status: 500 }
      );
    }
    return Response.json({ success: settings, error: "" }, { status: 200 });
  } catch (error) {
    return Response.json(
      { success: "", error: "Something went wrong" },
      { status: 500 }
    );
  }
}
