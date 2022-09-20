import { describe, it, expect } from "vitest";
import { randomUUID } from "crypto";
import { ParkingInMemoryRepository } from "@repositories/implementation/ParkingInMemoryRepository";
import { SaveCarParkingService } from "@services/SaveCarParkingService/SaveCarParkingService.tests";
import { UpdateCarParking } from "../services/UpdateCarParkingService/UpdateCarParkingService.tests";

describe("Update Car Parking Suite", () => {
  it("Should update the car parking", async () => {
    const parkingInMemoryRepository = new ParkingInMemoryRepository();
    const saveCarParking = new SaveCarParkingService(parkingInMemoryRepository);
    const sut = new UpdateCarParking(parkingInMemoryRepository);

    const mockUserHour = {
      name: "Leonardo",
      lastName: "Ferreira",
      carPlate: "AAA-0000",
      password: "123456",
      arrivalDate: new Date().getDate(),
      departureDate: new Date().getDate() + 1,
      user_id: randomUUID(),
    };

    const mockUserHour2 = {
      name: "Jose",
      lastName: "Abreu",
      carPlate: "AAA-0001",
    };

    await saveCarParking.execute({
      name: mockUserHour.name,
      lastName: mockUserHour.lastName,
      carPlate: mockUserHour.carPlate,
      password: mockUserHour.password,
      arrivalDate: mockUserHour.arrivalDate,
      departureDate: mockUserHour.departureDate,
      user_id: mockUserHour.user_id,
    });

    const updated = await sut.execute(mockUserHour.user_id, {
      name: mockUserHour2.name,
      lastName: mockUserHour2.lastName,
      carPlate: mockUserHour2.carPlate,
    });

    expect(updated).toEqual(mockUserHour2);
  });
});
