import { RequestDTOUpdate, RequestUserId } from "@DTOs/RequestsDTO";
import { ParkingRepository } from "@repositories/implementation/ParkingRepository";
import { UpdateCarsParkingService } from "@services/UpdateCarParkingService/UpdateCarsParkingService";
import { Request, Response } from "express";

export class UpdateCarsParkingController {
  async handle(request: Request, response: Response) {
    const parkingRepository = new ParkingRepository();
    const findAllCarsParkingService = new UpdateCarsParkingService(parkingRepository);
    const { user_id } = request.params as RequestUserId;
    const { name, lastName, departureDate } = request.body as RequestDTOUpdate;

    await findAllCarsParkingService.execute(user_id, { name, lastName, departureDate });

    return response.status(200).json("Data succesfully setted");
  }
}
