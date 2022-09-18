import { ParkingInMemoryRepository } from "@repositories/implementation/ParkingInMemoryRepository";
import { SaveCarParkingService } from "@services/SaveCarParkingService/SaveCarParkingService.tests";
import { DeleteCarService } from "@services/DeleteCarService/DeleteCarService.tests";
import { randomUUID } from "crypto";
import { describe, it, expect } from "vitest";

describe("Delete Parking Suite", () => {
  it("Should delete the parking by user_id", async () => {
    const parkingInMemoryRepository = new ParkingInMemoryRepository();
    const saveCarParkingService = new SaveCarParkingService(parkingInMemoryRepository);
    const sut = new DeleteCarService(parkingInMemoryRepository);

    const mockUserHour1 = {
      name: "Jose",
      lastName: "jr",
      password: "12345",
      carPlate: "AAA-0002",
      arrivalDate: new Date().getDate(),
      departureDate: new Date().getDate() + 1,
      user_id: randomUUID(),
    };
    const mockUserHour2 = {
      name: "Vini",
      lastName: "silva",
      password: "12345",
      carPlate: "AAA-0003",
      arrivalDate: new Date().getDate() + 2,
      departureDate: new Date().getDate() + 3,
      user_id: randomUUID(),
    };

    await saveCarParkingService.execute({
      name: mockUserHour1.name,
      lastName: mockUserHour1.lastName,
      password: mockUserHour1.password,
      arrivalDate: mockUserHour1.arrivalDate,
      carPlate: mockUserHour1.carPlate,
      departureDate: mockUserHour1.departureDate,
      user_id: mockUserHour1.user_id,
    });

    await saveCarParkingService.execute({
      name: mockUserHour2.name,
      lastName: mockUserHour2.lastName,
      arrivalDate: mockUserHour2.arrivalDate,
      password: mockUserHour2.password,
      carPlate: mockUserHour2.carPlate,
      departureDate: mockUserHour2.departureDate,
      user_id: mockUserHour2.user_id,
    });

    await sut.execute(mockUserHour2.user_id);

    expect(mockUserHour2).not.contain(parkingInMemoryRepository.InMemoryArray);
  });
});
