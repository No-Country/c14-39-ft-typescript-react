export interface ScaInfo {
  sc_email: string;
  sc_address: string;
  sc_lat: number;
  sc_alt: number;
  sc_open: boolean;
  sc_close: boolean;
}

export interface SportCenterData {
  sc_phone: string;
  sc_name: string;
  sc_description: string;
  sc_active: boolean;
  sc_imgs: string[];
  sc_info: ScaInfo;
  country_id?: string;
  user_id: string;
}

export interface SportCenterResponse extends SportCenterData {
  _id: string | any;
}

export interface SportCenterUpdateId extends SportCenterData {
  sportCenterId: string;
}
