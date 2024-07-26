import { getPathname } from "@/utils/getPathname";
import { usePathname } from "next/navigation";

export default function usePaths() {
  const fullPath = usePathname();
  const [locale, path] = getPathname(fullPath);

  return { fullPath, locale, path };
}
