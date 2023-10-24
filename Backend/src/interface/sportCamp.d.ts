import { ObjectId } from "mongoose";

export interface ISportCamp {
  sca_num: number;
  sca_description: string;
  sca_capacity: number;
  sca_width: number;
  sca_height: number;
  sca_active: boolean;
  sca_imgs: [string];
  camp_type_id: ObjectId;
  sport_center_id: ObjectId;
  user_id: ObjectId;
}

export interface ISportCampResponse extends ISportCamp {
  _id: string;
}

export interface ISportCampController {
  createSportCamp(reservationData: ISportCamp): Promise<ISportCampResponse>;
  getAllSportCamps(): Promise<ISportCampResponse[]>;
  getByIdSportCamps(id: string);
}
