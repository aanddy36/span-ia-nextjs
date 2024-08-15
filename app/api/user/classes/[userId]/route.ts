import { getUserMiniClassesById } from "@/utils/getUserClasses";

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;
  try {
    const classes = await getUserMiniClassesById(userId);
    return Response.json({ success: classes, error: "" });
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "There was an error providing the user's info", success: "" },
      { status: 500 }
    );
  }
}
