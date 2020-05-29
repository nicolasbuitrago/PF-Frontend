export interface Vinculate {
  email: string;
  phone: string;
  why: string;
  role_type: string;
}

export enum RoleTypes {
  ADMIN = 'admin',
  GOVERNMENT = 'government',
  STUDIO = 'studio',
  SPONSOR = 'sponsor',
  ACADEMY = 'academy',
  INDEPENDANT = 'independant'
}
