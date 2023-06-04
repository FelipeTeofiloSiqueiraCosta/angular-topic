export interface User {
  id?: string;
  name: string;
  email: string;
  picture?: string;
  permissionToken?: string;
  password?: string;
  expiresAt: number;
}
