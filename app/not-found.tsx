import Error from "@/app/_components/organisms/error";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function LocaleNotFound() {
  const cookieStore = cookies();
  const localeCookie = cookieStore.get("NEXT_LOCALE");
  if (!localeCookie?.value)
    return (
      <body className=" pt-20 flex flex-col items-center">
        <Error />
      </body>
    );
    
  redirect("/not-found");
}
