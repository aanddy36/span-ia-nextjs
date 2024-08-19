import { SortBySlug, StatusSlug } from "@/types/modals";
import { getAdminClasses } from "@/utils/getAdminClasses";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const status = searchParams.get("status") as StatusSlug | "";
  const sortBy = searchParams.get("sortBy") as SortBySlug | "";
  const page = searchParams.get("page") as string;
  try {
    const success = await getAdminClasses(status, sortBy, page);

    return Response.json({ success, error: "" }, { status: 200 });
  } catch (error) {
    return Response.json(
      { success: "", error: "Something went wrong" },
      { status: 500 }
    );
  }
}
