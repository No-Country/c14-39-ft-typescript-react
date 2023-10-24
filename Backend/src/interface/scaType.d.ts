import { ObjectId } from "mongoose";

export interface IScaType {
  sca_type_name: string;
  sca_type_description: string;
}

export interface IScaTypeResponse extends IScaType {
  _id: string | any;
}

export interface IScaTypeController {
  createSportCampType(scaTypeData: IScaType): Promise<IScaTypeResponse>;
}
