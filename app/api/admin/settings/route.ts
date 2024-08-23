import { AdminSettingsSchema } from "@/schemas/adminSettings";
import { authenticateUser } from "@/utils/authenticateUser";
import { getConfiguration } from "@/app/queries/getConfiguration";
import { updateAdminSettings } from "@/app/queries/updateAdminSettings";

export async function GET(req: Request) {
  try {
    const settings = await getConfiguration();
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

export async function POST(req: Request) {
  const settings = await req.json();

  // AUTHENTICATE TOKEN AND USER
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

  const validatedFields = AdminSettingsSchema.safeParse(settings);

  if (validatedFields.success) {
    const formattedFields = {
      ...validatedFields.data,
      pricePerHour: Number(validatedFields.data?.pricePerHour),
    };
    try {
      await updateAdminSettings(formattedFields);
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
