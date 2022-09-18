import { CarUpdateProps, ParkingEntity } from "@entities/ParkingEntity";
export interface IParkingRepository {
  findAllCars(): Promise<ParkingEntity[]>;
  saveParking({
    name,
    lastName,
    carPlate,
    password,
    arrivalDate,
    departureDate,
    user_id,
  }: ParkingEntity): Promise<ParkingEntity[]>;
  updateCars(user_id: string, { name, lastName, carPlate }: CarUpdateProps): Promise<void>;
  deleteCars(user_id: string): Promise<void>;
}
