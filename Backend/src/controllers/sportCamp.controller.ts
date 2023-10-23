import {
  ISportCamp,
  ISportCampController,
  ISportCampResponse,
} from "../interface/sportCamp";
import { SportCenterData, SportCenterUpdateId } from "../interface/sportCenter";
import { User, SportCenter, Country, Camp } from "../models";

export class SportCampController implements ISportCampController {
  public async createSportCamp(
    sportCampData: ISportCamp
  ): Promise<ISportCampResponse> {
    const [type, user] = await Promise.all([
      Country.findById(sportCampData.sca_capacity),
      User.findById(sportCampData.user_id),
    ]);

    if (!type || !user) {
      throw new Error("Country or User not found");
    }

    const sportCamp = new Camp({
      ...sportCampData,
    });

    await sportCamp.save();

    return {
      _id: "afdsad",
      ...sportCampData,
    };
  }
}

export const getSportCenters = async () => {
  try {
    const sportCenters = await SportCenter.find();
    return sportCenters;
  } catch (error) {
    throw error;
  }
};

export const getSportCenterById = async (sportCenterId: string) => {
  try {
    const sportCenter = await SportCenter.findById(sportCenterId)
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

    const sportCenter = new SportCenter({
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
    const sportCenter = await SportCenter.findByIdAndDelete(sportCenterId);
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
    const sportCenter = await SportCenter.findByIdAndUpdate(
      sportCenterId,
      { $set: restOfResult },
      { new: true }
    );
    return sportCenter;
  } catch (error) {
    throw error;
  }
};
