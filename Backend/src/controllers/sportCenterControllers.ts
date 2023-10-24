import { SportCenterData, SportCenterUpdateId } from "../interface";
import { Country, SportCenterModel, User } from "../models";

export const getSportCenters = async () => {
  try {
    const sportCenters = await SportCenterModel.find()
      .populate("user_id")
      .populate("list_sport_camps", {
        sca_num: 1,
        _id: 1,
      });
    return sportCenters;
  } catch (error) {
    throw error;
  }
};

export const getSportCenterById = async (sportCenterId: string) => {
  try {
    const sportCenter = await SportCenterModel.findById(sportCenterId)
      .populate("user_id")
      .populate("list_sport_camps", {
        sca_num: 1,
        _id: 1,
      });
    return sportCenter;
  } catch (error) {
    throw error;
  }
};

export const createSportCenter = async (data: SportCenterData) => {
  try {
    const [country, user] = await Promise.all([
      Country.findById(data.country_id),
      User.findById(data.user_id),
    ]);

    if (!country || !user) {
      throw new Error("Country or User not found");
    }

    const { country_id, ...dataSport } = data;

    const sportCenter = new SportCenterModel(dataSport);
    await sportCenter.save();

    // Update country property list_sport_centers
    await Country.findByIdAndUpdate(country_id, {
      $push: { list_sport_centers: sportCenter._id },
    });

    return sportCenter;
  } catch (error) {
    console.log(error);

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
