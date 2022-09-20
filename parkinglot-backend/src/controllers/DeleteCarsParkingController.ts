import { DeleteCarsParkingService } from "@services/DeleteCarsService/DeleteCarsParkingService";
import { ParkingRepository } from "@repositories/implementation/ParkingRepository";
import { Request, Response } from "express";
import { RequestUserId } from "@DTOs/RequestsDTO";

export class DeleteCarsParkingController {
  async handle(request: Request, response: Response) {
    const parkingRepository = new ParkingRepository();
    const deleteCarService = new DeleteCarsParkingService(parkingRepository);
    const { user_id } = request.params as RequestUserId;

    await deleteCarService.execute(user_id);

    return response.status(200).json("Car parked deleted.");
  }
}
