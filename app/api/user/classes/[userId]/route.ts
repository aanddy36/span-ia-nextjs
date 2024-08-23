import { authenticateUser } from "@/utils/authenticateUser";
import { getUserMiniClassesById } from "@/app/queries/getUserClasses";

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;
  // AUTHENTICATE TOKEN AND USER
  try {
    const authResult = await authenticateUser(req, userId);
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
