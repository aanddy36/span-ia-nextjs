import { UserSettingsSchema } from "@/schemas/userSettings";
import { authenticateUser } from "@/utils/authenticateUser";
import { getUserInfo } from "@/app/queries/getUserInfo";
import { updateUserById } from "@/app/queries/updateUserById";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  try {
    const user = await getUserInfo(userId);
    
    return Response.json({ success: user, error: "" });
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "There was an error providing the user's info", success: "" },
      { status: 500 }
    );
  }
}

export async function POST(
  req: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;
  const { name, phone } = await req.json();

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

  const validatedFields = UserSettingsSchema.safeParse({ name, phone });

  if (validatedFields.success) {
    try {
      await updateUserById(userId, { name, phone });
      return Response.json({ success: true, error: "" }, { status: 200 });
    } catch (error) {
      console.error(error);
      return Response.json({ success: false, error: "" }, { status: 500 });
    }
  } else {
    return Response.json(
      { error: "Invalid input data", success: false },
      { status: 400 }
    );
  }
}
