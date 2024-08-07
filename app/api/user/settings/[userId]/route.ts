import { UserSettingsSchema } from "@/schemas/userSettings";
import { getUserInfo } from "@/utils/getUserInfo";
import { isTokenExpired } from "@/utils/isTokenExpired";
import { updateUserById } from "@/utils/updateUserById";
import { getToken } from "next-auth/jwt";
import { revalidatePath, revalidateTag } from "next/cache";

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  try {
    const user = await getUserInfo(userId);
    return Response.json({ ...user });
  } catch (error) {
    throw new Error("There was an error providing the user's info");
  }
}

export async function POST(
  req: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;
  const { name, phone } = await req.json();

  /* const t = await getTranslations("aboutPage")
    console.log(t("everyStudent.description")); */

  const secret = process.env.AUTH_SECRET;

  //Verificar que el JWT tenga un secret
  if (!secret) {
    throw new Error("AUTH_SECRET is not defined.");
  }

  //Recuperar el token
  const token = await getToken({ req, secret });

  //Si el token no existe, rechazar el request
  if (!token) {
    throw new Error("No token provided");
  }

  // Si el token expiró, rechazar el request
  const tokenExpired = isTokenExpired(token.exp);
  if (tokenExpired) {
    throw new Error("Expired token");
  }

  // Si el id del usuario no es el del token, rechazar el request
  if (userId !== token.sub) {
    throw new Error("You are not the user");
  }

  const validatedFields = UserSettingsSchema.safeParse({ name, phone });

  if (validatedFields.success) {
    try {
      await updateUserById(userId, { name, phone });
      console.log("Revalidamos");
      return Response.json({ success: true });
    } catch (error) {
      return Response.json({ success: false });
    }
  }
}
