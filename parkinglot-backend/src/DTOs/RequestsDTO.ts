export type RequestSaveCarParkingDTO = {
  user_id?: string;
  name: string;
  lastName: string;
  password: string;
  carPlate: string;
  arrivalDate: Date | number;
  departureDate: Date | number | string;
};

export type RequestDTOUpdate = {
  name: string;
  lastName: string;
  departureDate: Date | string | number;
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
