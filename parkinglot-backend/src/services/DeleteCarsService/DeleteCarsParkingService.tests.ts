import { IParkingInMemoryRepository } from "@repositories/interface/IParkingInMemoryRepository";

export class DeleteCarService {
  constructor(private readonly parking: IParkingInMemoryRepository) {}

  async execute(id: string): Promise<void> {
    await this.parking.deleteCar(id);
  }
}
