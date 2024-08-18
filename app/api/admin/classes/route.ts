import { SortBySlug, StatusSlug } from "@/types/modals";
import { getAdminClasses } from "@/utils/getAdminClasses";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const status = searchParams.get("status") as StatusSlug | "";
  const sortBy = searchParams.get("sortBy") as SortBySlug | "";
  try {
    const success = await getAdminClasses(status, sortBy);
    console.log({ status, sortBy: sortBy });
    /* console.log(classes); */

    return Response.json({ success, error: "" }, { status: 200 });
  } catch (error) {
    return Response.json(
      { success: "", error: "Something went wrong" },
      { status: 500 }
    );
  }
}
