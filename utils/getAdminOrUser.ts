/**
 * Returns path if the user is an admin or an user.
 * @param {UserRole} role the enum UserRole
 */

import { UserRole } from "@prisma/client";

export const getAdminOrUser = (role: UserRole | undefined) => {
  if (!role) return "";
  return role === UserRole.ADMIN ? "admin" : "user";
};
