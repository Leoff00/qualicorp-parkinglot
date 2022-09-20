import { CarUpdateProps, ParkingEntity } from "@entities/ParkingEntity";
import { IParkingInMemoryRepository } from "@repositories/interface/IParkingInMemoryRepository";

export class ParkingInMemoryRepository implements IParkingInMemoryRepository {
  private inMemoryArray: ParkingEntity[] = [];

  get InMemoryArray() {
    return this.inMemoryArray;
  }

  public async findAllCars(): Promise<ParkingEntity[]> {
    return await this.InMemoryArray.map((parking: ParkingEntity) => {
      return parking;
    });
  }

  public async saveParking({
    name,
    lastName,
    password,
    carPlate,
    arrivalDate,
    departureDate,
    user_id,
  }: ParkingEntity): Promise<ParkingEntity> {
    await this.InMemoryArray.push({ name, lastName, password, carPlate, arrivalDate, departureDate, user_id });
    const res = {
      name,
      lastName,
      password,
      carPlate,
      arrivalDate,
      departureDate,
      user_id,
    };
    return new ParkingEntity(
      res.name,
      res.lastName,
      res.password,
      res.carPlate,
      res.arrivalDate,
      res.departureDate
    );
  }

  async updateCar(user_id: string, newData: CarUpdateProps): Promise<CarUpdateProps> {
    let update: CarUpdateProps = await this.InMemoryArray.find((parking) => {
      return parking.user_id === user_id;
    });

    update = newData;

    return {
      name: update.name,
      lastName: update.lastName,
      carPlate: update.carPlate,
    };
  }

  async deleteCar(user_id: string): Promise<void> {
    await this.InMemoryArray.filter((parking: ParkingEntity) => {
      if (user_id === parking.user_id) {
        this.InMemoryArray.pop();
      }
    });
  }
}
