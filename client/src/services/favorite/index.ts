import axiosInstance from "../axiosInstance";
import { GetAllRentPayload, GetAllRentsResponse } from "../rent/types";
import { FavoriteResponse, getAllPaginationResponse } from "./types";

async function getAllPagination() {
  return await axiosInstance.get<getAllPaginationResponse>(
    `/favorites/pagination-favorite`
  );
}

async function getAll(data: GetAllRentPayload) {
  const params = new URLSearchParams();

  if (data.skip) params.append("skip", data.skip.toString());
  if (data.take) params.append("take", data.take.toString());
  if (data.search) params.append("search", data.search);
  if (data.dropOffLocation)
    params.append("dropOffLocation", data.dropOffLocation);
  if (data.pickUpLocation) params.append("pickUpLocation", data.pickUpLocation);
  if (data.categories) {
    data.categories.forEach((category, index) => {
      params.append(`categories[${index}]`, category);
    });
  }
  if (data.capacities) {
    data.capacities.forEach((capacity, index) => {
      params.append(`capacities[${index}]`, capacity);
    });
  }
  if (data.minPrice) params.append("minPrice", data.minPrice);
  if (data.maxPrice) params.append("maxPrice", data.maxPrice);
  if (data.showInRecommendation)
    params.append("showInRecommendation", data.showInRecommendation.toString());

  console.log(params.toString());
  return await axiosInstance.get<GetAllRentsResponse>(
    `/favorites?${params.toString()}`
  );
}

async function toggle({ id }: { id: string }) {
  return await axiosInstance.post<FavoriteResponse>(`/favorites/${id}`);
}

const favoriteService = {
  getAllPagination,
  getAll,
  toggle,
};

export default favoriteService;
