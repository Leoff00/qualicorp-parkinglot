import { ResponseSaveCarParkingDTO } from "@DTOs/RequestsDTO";
import { ParkingEntity } from "@entities/ParkingEntity";
import { IParkingRepository } from "@repositories/interface/IParkingRepository";
import { genSalt, hash } from "bcryptjs";

export class SaveCarsParkingService {
  constructor(private readonly parking: IParkingRepository) {}
  async execute({
    name,
    lastName,
    password,
    carPlate,
    arrivalDate,
    departureDate,
    user_id,
  }: ParkingEntity): Promise<ResponseSaveCarParkingDTO[]> {
    const salt = await genSalt(8);
    const passwordHash = await hash(password, salt);

    const saved = await this.parking.saveParking({
      name,
      lastName,
      password: passwordHash,
      carPlate,
      arrivalDate,
      departureDate,
      user_id,
    });

    const reduceObject = saved.map((response) => {
      return {
        name: response.name,
        lastName: response.lastName,
        carPlate: response.carPlate,
        arrivalDate: response.arrivalDate,
        departureDate: response.departureDate,
        user_id: response.user_id,
      };
    });
    return reduceObject;
  }
}
