import ReserveClass from "@/app/_components/organisms/reserve-class";
import { ReserveClassProvider } from "@/contexts/ReserveClass";
import { Messages } from "@/types/modals";
import { getMessages } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const {
    reservePage: {
      metadata: { title, description },
    },
  } = (await getMessages({ locale })) as Messages;
  return { title, description };
}

const page = async () => {
  return (
    <ReserveClassProvider>
      <ReserveClass />
    </ReserveClassProvider>
  );
};

export default page;
