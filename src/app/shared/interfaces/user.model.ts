import { DataComponent } from './data-component.model';

export interface User {
  id: number;
  email: string;
  username: string;
  permission_id: number;
  role_type: string;
  created_at: Date;
  updated_at: Date;
  resource?: DataComponent;
  email_verification_status?: boolean;
  incomplete_profile?: boolean;
}
