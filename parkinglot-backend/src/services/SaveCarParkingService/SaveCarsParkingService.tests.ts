import { ParkingEntity } from "@entities/ParkingEntity";
import { IParkingInMemoryRepository } from "@repositories/interface/IParkingInMemoryRepository";

export class SaveCarParkingService {
  constructor(private readonly parking: IParkingInMemoryRepository) {}

  async execute({
    name,
    lastName,
    password,
    carPlate,
    arrivalDate,
    departureDate,
    user_id,
  }: ParkingEntity): Promise<ParkingEntity> {
    const savedCar = await this.parking.saveParking({
      name,
      lastName,
      password,
      carPlate,
      arrivalDate,
      departureDate,
      user_id,
    });

    if (savedCar.departureDate <= savedCar.arrivalDate) {
      throw new Error("Departure Date cannot be less or equal the Arrival Date hour");
    }

    return await savedCar;
  }
}
