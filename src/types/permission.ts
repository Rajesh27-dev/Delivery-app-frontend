export interface Permission {
  permissionId: string;
  code: string;
  name: string;
  orgId?: string | null;
}
