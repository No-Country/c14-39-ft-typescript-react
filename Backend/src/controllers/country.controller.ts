import {
  ICountry,
  ICountryController,
  ICountryResponseCreate,
  ICountryResponseGet,
} from "../interface/country";
import { Country } from "../models";

export class CountryController implements ICountryController {
  public async getAllCountries(): Promise<ICountryResponseGet[]> {
    try {
      const countries: ICountryResponseGet[] = await Country.find().populate(
        "list_sport_centers"
      );
      return countries;
    } catch (error: any) {
      throw new error();
    }
  }

  public async getByIdCountry(id: string) {
    try {
      const country: any = await Country.findById(id).populate(
        "list_sport_centers"
      );

      return country;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  public async createCountry(
    country: ICountry
  ): Promise<ICountryResponseCreate> {
    try {
      const newCountry = new Country(country);
      await newCountry.save();

      return newCountry;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
