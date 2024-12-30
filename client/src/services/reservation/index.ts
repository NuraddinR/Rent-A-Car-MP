import axiosInstance from "../axiosInstance";
import { CreateReservationPayload, GetAllReservationsResponse } from "./type";

async function getAll() {
  return axiosInstance.get<GetAllReservationsResponse>("/reservations");
}

async function create(data: CreateReservationPayload) {
  return axiosInstance.post("/reservations", data);
}

const reservationService = {
  getAll,
  create,
};

export default reservationService;
