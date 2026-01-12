export type UserRole = "PLATFORM_ADMIN" | "ORG_ADMIN" | "CAPTAIN";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  orgName?: string;
  status: "ACTIVE" | "DISABLED";
}
