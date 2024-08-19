import React from "react";
import { fetchRequest } from "@/utils/fetchRequest";
import AdminInfo from "./admin-info";
import AdminSchedule from "./admin-schedule";

const AdminSettings = async () => {
  const [settings, user] = await Promise.all([
    fetchRequest("/api/admin/settings"),
    fetchRequest("/api/user/settings/clzt9npmh0000laz19no7ufm5"),
  ]);

  return (
    <>
      <AdminSchedule />
      <AdminInfo {...settings.success} />
    </>
  );
};

export default AdminSettings;
