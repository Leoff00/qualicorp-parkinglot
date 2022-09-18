import { FindAllCarsParkingService } from "@services/FindCarService/FindAllCarsParkingService";
import { ParkingRepository } from "@repositories/implementation/ParkingRepository";
import { Request, Response } from "express";

export class FindAllCarsParkingController {
  async handle(request: Request, response: Response) {
    const parkingRepository = new ParkingRepository();
    const findAllCarsParkingService = new FindAllCarsParkingService(parkingRepository);

    const findedCars = await findAllCarsParkingService.execute();
    return response.status(200).json(findedCars);
  }
}
