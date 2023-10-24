import mongoose, { Schema } from "mongoose";
import { SportCenterResponse } from "./sportCenter";

export interface ICountry {
  name: string;
  image: string;
  list_sport_centers?: Schema.Types.ObjectId[];
}

export interface ICountryResponseGet extends ICountry {
  _id: Schema.Types.ObjectId | any;
  list_sport_centers?: SportCenterResponse[];
}

export interface ICountryResponseCreate extends ICountry {
  _id: Schema.Types.ObjectId | any;
  list_sport_centers?: Schema.Types.ObjectId[] | any;
}

export interface ICountryController {
  getAllCountries(): Promise<ICountryResponseGet[]>;
  createCountry(country: ICountry): Promise<ICountryResponseCreate>;
}
