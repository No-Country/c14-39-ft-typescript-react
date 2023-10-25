import {
  ISportCamp,
  ISportCampController,
  ISportCampResponse,
} from "../interface/sportCamp";
import { SportCenterData, SportCenterUpdateId } from "../interface/sportCenter";
import { User, SportCenterModel, Country, Camp, CampType } from "../models";

export class SportCampController implements ISportCampController {
  public async getAllSportCamps(): Promise<ISportCampResponse[]> {
    try {
      const sportCamps: ISportCampResponse[] = await Camp.find()
        .populate("sport_center_id", {
          _id: 1,
          sc_name: 1,
          sc_description: 1,
          sc_info: 1,
          sc_active: 1,
        })
        .populate("camp_type_id")
        .populate("user_id");
      return sportCamps;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  public async getByIdSportCamps(id: string) {
    try {
      const sportCamp = await Camp.findById(id)
        .populate("sport_center_id", {
          _id: 1,
          sc_name: 1,
          sc_description: 1,
          sc_info: 1,
          sc_active: 1,
        })
        .populate("camp_type_id")
        .populate("user_id");
      return sportCamp;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  public async createSportCamp(
    sportCampData: ISportCamp
  ): Promise<ISportCampResponse> {
    const [type, user, sportCenter] = await Promise.all([
      CampType.findById(sportCampData.camp_type_id),
      User.findById(sportCampData.user_id),
      SportCenterModel.findById(sportCampData.sport_center_id),
    ]);

    if (!type || !user || !sportCenter) {
      throw new Error("Country or User not found");
    }

    const sportCamp = new Camp(sportCampData);
    await sportCamp.save();

    await SportCenterModel.findByIdAndUpdate(sportCampData.sport_center_id, {
      $push: { list_sport_camps: sportCamp._id },
    });

    return sportCamp;
  }
}

export const getSportCenters = async () => {
  try {
    const sportCenters = await SportCenterModel.find();
    return sportCenters;
  } catch (error) {
    throw error;
  }
};

export const getSportCenterById = async (sportCenterId: string) => {
  try {
    const sportCenter = await SportCenterModel.findById(sportCenterId)
      .populate("country_id", {
        name: 1,
      })
      .populate("user_id", {
        name: 1,
      })
      .populate("camps_id", {
        num: 1,
      });
    return sportCenter;
  } catch (error) {
    throw error;
  }
};

export const registerSportCenter = async (data: SportCenterData) => {
  try {
    const [country, user] = await Promise.all([
      Country.findById(data.country_id),
      User.findById(data.user_id),
    ]);

    if (!country || !user) {
      throw new Error("Country or User not found");
    }

    const sportCenter = new SportCenterModel({
      ...data,
    });

    await sportCenter.save();
    return sportCenter;
  } catch (error) {
    throw error;
  }
};

export const deleteSportCenter = async (sportCenterId: string) => {
  try {
    const sportCenter = await SportCenterModel.findByIdAndDelete(sportCenterId);
    return sportCenter;
  } catch (error) {
    throw error;
  }
};

export const modifySportCenterById = async (
  data: Partial<SportCenterUpdateId>
) => {
  try {
    const { sportCenterId, ...restOfResult } = data;
    const sportCenter = await SportCenterModel.findByIdAndUpdate(
      sportCenterId,
      { $set: restOfResult },
      { new: true }
    );
    return sportCenter;
  } catch (error) {
    throw error;
  }
};
