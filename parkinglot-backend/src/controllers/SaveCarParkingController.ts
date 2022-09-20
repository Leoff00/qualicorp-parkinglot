import { SaveCarsParkingService } from "@services/SaveCarParkingService/SaveCarsParkingService";
import { ParkingRepository } from "@repositories/implementation/ParkingRepository";
import { RequestSaveCarParkingDTO } from "@DTOs/RequestsDTO";
import { Request, Response } from "express";

export class SaveCarParkingController {
  async handle(request: Request, response: Response) {
    const parkingRepository = new ParkingRepository();
    const saveCarParkingService = new SaveCarsParkingService(parkingRepository);

    const { name, lastName, password, carPlate, arrivalDate, departureDate, user_id } =
      request.body as RequestSaveCarParkingDTO;

    const data = await saveCarParkingService.execute({
      name,
      lastName,
      password,
      carPlate,
      arrivalDate,
      departureDate,
      user_id,
    });

    return response.status(201).json(data);
  }
}
