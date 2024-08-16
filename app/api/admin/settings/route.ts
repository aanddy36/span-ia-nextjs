import { AdminSettingsSchema } from "@/schemas/adminSettings";
import { getConfiguration } from "@/utils/getConfiguration";
import { updateAdminSettings } from "@/utils/updateAdminSettings";

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
