import { ParkingInMemoryRepository } from "@repositories/implementation/ParkingInMemoryRepository";
import { randomUUID } from "crypto";
import { SaveCarParkingService } from "@services/SaveCarParkingService/SaveCarParkingService.tests";
import { describe, it, expect } from "vitest";
import { FindAllCarService } from "../services/FindCarService/FindAllCarsParking.tests";

describe("Find All Car Parked", () => {
  it("Should find all cars saved", async () => {
    const parkingInMemoryRepository = new ParkingInMemoryRepository();
    const saveCarParking = new SaveCarParkingService(parkingInMemoryRepository);
    const sut = new FindAllCarService(parkingInMemoryRepository);

    const mockUserHour = {
      name: "Leonardo",
      lastName: "Ferreira",
      password: "12345",
      carPlate: "AAA-0000",
      arrivalDate: new Date().getDate(),
      departureDate: new Date().getDate() + 1,
      user_id: randomUUID(),
    };

    const mockUserHour2 = {
      name: "Leonardo",
      lastName: "Ferreira",
      password: "123456",
      carPlate: "AAA-0000",
      arrivalDate: new Date().getDate(),
      departureDate: new Date().getDate() + 1,
      user_id: randomUUID(),
    };

    await saveCarParking.execute({
      name: mockUserHour.name,
      lastName: mockUserHour.lastName,
      password: mockUserHour.password,
      carPlate: mockUserHour.carPlate,
      arrivalDate: mockUserHour.arrivalDate,
      departureDate: mockUserHour.departureDate,
      user_id: mockUserHour.user_id,
    });

    await saveCarParking.execute({
      name: mockUserHour2.name,
      lastName: mockUserHour2.lastName,
      password: mockUserHour2.password,
      carPlate: mockUserHour2.carPlate,
      arrivalDate: mockUserHour2.arrivalDate,
      departureDate: mockUserHour2.departureDate,
      user_id: mockUserHour2.user_id,
    });

    const parkingFinded = await sut.execute();

    expect(parkingFinded).toEqual([mockUserHour, mockUserHour2]);
  });
});
