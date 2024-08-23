"use client";
import { ConfigutationType } from "@/types/modals";
import { createContext, FC, useContext, useEffect, useState } from "react";

type Configuration = Pick<
  ConfigutationType,
  "address" | "phone" | "pricePerHour"
>;

interface ConfigurationContextProps {
  configuration: Configuration;
}

const ConfigurationContext = createContext<
  ConfigurationContextProps | undefined
>(undefined);

interface ConfigurationProviderProps {
  children: React.ReactNode;
}

const ConfigurationProvider: FC<ConfigurationProviderProps> = ({
  children,
}) => {
  const [configuration, setConfiguration] = useState<Configuration>(
    {} as Configuration
  );

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/admin/settings");
      const data = await res.json();
      setConfiguration(data.success);
    };
    fetchData();
  }, []);

  return (
    <ConfigurationContext.Provider value={{ configuration }}>
      {children}
    </ConfigurationContext.Provider>
  );
};

const useConfiguration = () => {
  const { configuration } = useContext(
    ConfigurationContext
  ) as ConfigurationContextProps;

  return configuration;
};

export { ConfigurationProvider, useConfiguration };
