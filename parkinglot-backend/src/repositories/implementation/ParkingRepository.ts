import { ParkingEntity, CarUpdateProps } from "@entities/ParkingEntity";
import { connectWithDB as Driver } from "@database/index";
import { IParkingRepository } from "@repositories/interface/IParkingRepository";

export class ParkingRepository implements IParkingRepository {
  public async findAllCars(): Promise<ParkingEntity[]> {
    const { driver } = await Driver();
    const nodes: ParkingEntity[] = [];

    try {
      const results = await driver.session({ database: "neo4j" }).run(process.env.QUERY_FIND_CARS, {});
      results.records.forEach((res) => {
        nodes.push(res.get(0).properties);
      });
      return nodes;
    } catch (err) {
      console.error(err);
    } finally {
      await driver.close();
    }
  }

  public async saveParking({
    name,
    lastName,
    carPlate,
    password,
    arrivalDate,
    departureDate,
    user_id,
  }: ParkingEntity): Promise<ParkingEntity[]> {
    const params = {
      name,
      lastName,
      carPlate,
      password,
      arrivalDate,
      departureDate,
      user_id,
    };
    const { driver } = await Driver();
    const nodes: ParkingEntity[] = [];

    try {
      const results = await driver.session({ database: "neo4j" }).run(process.env.QUERY_SAVE_CARS, params);
      results.records.forEach((res) => {
        nodes.push(res.get(0).properties);
      });
      return nodes;
    } catch (err) {
      console.error(err);
    } finally {
      await driver.close();
    }
  }

  public async updateCars(user_id: string, { name, lastName, carPlate }: CarUpdateProps): Promise<void> {
    const params = {
      user_id,
      name,
      lastName,
      carPlate,
    };
    const { driver } = await Driver();
    try {
      await driver.session({ database: "neo4j" }).run(process.env.QUERY_UPDATE_CARS, params);
    } catch (err) {
      console.error(err);
    } finally {
      await driver.close();
    }
  }

  public async deleteCars(user_id: string): Promise<void> {
    const params = {
      user_id,
    };
    const { driver } = await Driver();
    try {
      await driver.session({ database: "neo4j" }).run(process.env.QUERY_DELETE_CARS, params);
    } catch (err) {
      console.error(err);
    } finally {
      await driver.close();
    }
  }
}
