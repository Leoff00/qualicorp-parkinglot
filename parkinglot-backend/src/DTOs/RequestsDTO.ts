export type RequestSaveCarParkingDTO = {
  user_id?: string;
  name: string;
  lastName: string;
  password: string;
  carPlate: string;
  arrivalDate: Date | number;
  departureDate: Date | number;
};

export type RequestDTOUpdate = {
  name: string;
  lastName: string;
  carPlate: string;
};

export type RequestUserId = {
  user_id: string;
};

export type ResponseSaveCarParkingDTO = {
  user_id?: string;
  name: string;
  lastName: string;
  carPlate: string;
  arrivalDate: Date | number;
  departureDate: Date | number;
};
