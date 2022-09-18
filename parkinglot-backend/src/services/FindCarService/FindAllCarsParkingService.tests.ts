import { ParkingEntity } from "@entities/ParkingEntity";
import { IParkingInMemoryRepository } from "@repositories/interface/IParkingInMemoryRepository";

export class FindAllCarService {
  constructor(private readonly parking: IParkingInMemoryRepository) {}

  async execute(): Promise<ParkingEntity[]> {
    const parkingFinded = await this.parking.findAllCars();

    return parkingFinded;
  }
}
