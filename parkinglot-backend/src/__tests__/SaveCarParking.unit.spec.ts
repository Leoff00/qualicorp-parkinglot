import { expect, describe, it } from "vitest";
import { ParkingInMemoryRepository } from "@repositories/implementation/ParkingInMemoryRepository";
import { randomUUID } from "crypto";
import { ParkingEntity } from "@entities/ParkingEntity";
import { SaveCarParkingService } from "../services/SaveCarParkingService/SaveCarParkingService.tests";

describe("Save Parking Suite", () => {
  it("Should save the the parking", async () => {
    const parkingInMemoryRepository = new ParkingInMemoryRepository();
    const sut = new SaveCarParkingService(parkingInMemoryRepository);

    const mockUserHour = {
      name: "Leonardo",
      lastName: "Ferreira",
      password: "12345",
      carPlate: "AAA-0000",
      arrivalDate: new Date().getDate(),
      departureDate: new Date().getDate() + 1,
      user_id: randomUUID(),
    };

    expect(
      sut.execute({
        name: mockUserHour.name,
        lastName: mockUserHour.lastName,
        password: mockUserHour.password,
        arrivalDate: mockUserHour.arrivalDate,
        carPlate: mockUserHour.carPlate,
        departureDate: mockUserHour.departureDate,
        user_id: mockUserHour.user_id,
      })
    ).resolves.toBeInstanceOf(ParkingEntity);
    expect(parkingInMemoryRepository.InMemoryArray).toEqual([mockUserHour]);
  });

  it("Should not save the parking with departureDate less or equal arrivalDate", async () => {
    const parkingInMemoryRepository = new ParkingInMemoryRepository();
    const sut = new SaveCarParkingService(parkingInMemoryRepository);

    const mockUserHour = {
      name: "Leonardo",
      lastName: "Ferreira",
      password: "12345",
      carPlate: "AAA-0000",
      arrivalDate: new Date().getDate(),
      departureDate: new Date().getDate(),
      user_id: randomUUID(),
    };

    expect(
      async () =>
        await sut.execute({
          name: mockUserHour.name,
          lastName: mockUserHour.lastName,
          carPlate: mockUserHour.carPlate,
          password: mockUserHour.password,
          arrivalDate: mockUserHour.arrivalDate,
          departureDate: mockUserHour.departureDate,
          user_id: mockUserHour.user_id,
        })
    ).rejects.toThrowError("Departure Date cannot be less or equal the Arrival Date hour");
  });
});
