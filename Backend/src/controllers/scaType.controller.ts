import mongoose from "mongoose";
import {
  IScaType,
  IScaTypeController,
  IScaTypeResponse,
} from "../interface/scaType";
import { CampType } from "../models";

export class ScaTypeController implements IScaTypeController {
  public async createSportCampType(
    scaTypeData: IScaType
  ): Promise<IScaTypeResponse> {
    const scaType = new CampType({ ...scaTypeData });
    await scaType.save();

    const response: IScaTypeResponse = {
      _id: scaType._id,
      sca_type_name: scaType.sca_type_name,
      sca_type_description: scaType.sca_type_description,
    };

    return response;
  }
}
