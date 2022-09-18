import { CarUpdateProps } from "@entities/ParkingEntity";
import { IParkingInMemoryRepository } from "@repositories/interface/IParkingInMemoryRepository";

export class UpdateCarParking {
  constructor(private readonly parking: IParkingInMemoryRepository) {}

  async execute(user_id: string, newData: CarUpdateProps): Promise<CarUpdateProps> {
    const updatedCarParking = await this.parking.updateCar(user_id, newData);

    return updatedCarParking;
  }
}
