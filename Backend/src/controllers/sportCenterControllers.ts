import { SportCenterData, SportCenterUpdateId } from "../interface/sportCenter";
import { User, SportCenter, Country } from '../models'

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
      })
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

export const modifySportCenterById = async (data: Partial<SportCenterUpdateId>) => {
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
