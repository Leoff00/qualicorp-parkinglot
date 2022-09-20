export type responseProps = {
  name: string;
  lastName: string;
  carPlate: string;
  password: string;
  arrivalDate: Date | number;
  departureDate: Date | number | string;
  user_id: string;
};

export type updateData = {
  name: string;
  lastName: string;
  departureDate: Date | number | string;
};
