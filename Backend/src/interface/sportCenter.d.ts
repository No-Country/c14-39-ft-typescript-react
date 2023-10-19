export interface SportCenterData {
  name: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  lat: number;
  alt: number;
  open: boolean;
  close: boolean;
  active: boolean;
  imgs: string[];
  country_id: string;
  user_id: string;
}

export interface SportCenterUpdateId extends SportCenterData {
  sportCenterId: string;
}
