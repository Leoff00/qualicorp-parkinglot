import { ResponseSaveCarParkingDTO } from "@DTOs/RequestsDTO";
import { IParkingRepository } from "@repositories/interface/IParkingRepository";

export class FindAllCarsParkingService {
  constructor(private readonly parking: IParkingRepository) {}

  async execute(): Promise<ResponseSaveCarParkingDTO[]> {
    const parkingFinded = await this.parking.findAllCars();

    const reduceObject = parkingFinded.map((response) => {
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
