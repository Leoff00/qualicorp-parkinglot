export class ParkingEntity {
  user_id?: string;
  name: string;
  lastName: string;
  password: string;
  carPlate: string;
  arrivalDate: Date | number;
  departureDate: Date | number | string;

  constructor(
    name: string,
    lastName: string,
    password: string,
    carPlate: string,
    arrivalDate: Date | number,
    departureDate: Date | number | string,
    user_id?: string
  ) {
    this.name = name;
    this.lastName = lastName;
    this.password = password;
    this.carPlate = carPlate;
    this.arrivalDate = arrivalDate;
    this.departureDate = departureDate;
    this.user_id = user_id;
  }
}

export type CarUpdateProps = Pick<ParkingEntity, "name" | "lastName" | "departureDate">;
