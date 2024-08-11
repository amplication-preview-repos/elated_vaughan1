import { SortOrder } from "../../util/SortOrder";

export type BarberOrderByInput = {
  availability?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  latitude?: SortOrder;
  location?: SortOrder;
  longitude?: SortOrder;
  name?: SortOrder;
  ratings?: SortOrder;
  services?: SortOrder;
  updatedAt?: SortOrder;
};
