import { useRouter } from "next/navigation";
import { getFuturePath } from "@/utils/getFuturePath";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/shadcn/select";
import Image from "next/image";
import es from "@/public/spain.svg";
import en from "@/public/usa.svg";
import usePaths from "@/hooks/usePaths";

export const SelectLang = () => {
  const { locale, fullPath } = usePaths();
  const router = useRouter();

  const handleChange = (value: string) => {
    const futurePath = getFuturePath(fullPath, value);
    router.push(futurePath);
  };

  return (
    <Select defaultValue={locale} onValueChange={handleChange}>
      <SelectTrigger className="ring-0 border-0 focus:ring-offset-0 focus:ring-0">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className=" font-semibold min-w-0">
        <SelectItem value="en" className=" cursor-pointer">
          <div className="flex items-center">
            <Image src={en} alt="English logo" className=" mr-2 h-4 w-4" />
            EN
          </div>
        </SelectItem>
        <SelectItem value="es" className=" cursor-pointer">
          <div className="flex items-center">
            <Image src={es} alt="Spanish logo" className=" mr-2 h-4 w-4" />
            ES
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
