import { CarUpdateProps, ParkingEntity } from "@entities/ParkingEntity";
export interface IParkingInMemoryRepository {
  findAllCars(): Promise<ParkingEntity[]>;
  saveParking({
    name,
    lastName,
    carPlate,
    password,
    arrivalDate,
    departureDate,
    user_id,
  }: ParkingEntity): Promise<ParkingEntity>;
  updateCar(user_id: string, newData: CarUpdateProps): Promise<CarUpdateProps>;
  deleteCar(user_id: string): Promise<void>;
}
