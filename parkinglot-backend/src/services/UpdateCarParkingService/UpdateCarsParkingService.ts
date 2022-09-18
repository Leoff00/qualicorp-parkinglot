import { RequestDTOUpdate } from "@DTOs/RequestsDTO";
import { IParkingRepository } from "@repositories/interface/IParkingRepository";

export class UpdateCarsParkingService {
  constructor(private readonly parking: IParkingRepository) {}

  async execute(user_id: string, { name, lastName, carPlate }: RequestDTOUpdate): Promise<void> {
    await this.parking.updateCars(user_id, { name, lastName, carPlate });
  }
}
