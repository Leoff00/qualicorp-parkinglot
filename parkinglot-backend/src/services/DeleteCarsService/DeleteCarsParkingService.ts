import { IParkingRepository } from "@repositories/interface/IParkingRepository";

export class DeleteCarsParkingService {
  constructor(private readonly parking: IParkingRepository) {}

  async execute(user_id: string): Promise<void> {
    await this.parking.deleteCars(user_id);
  }
}
