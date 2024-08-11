import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  barberId?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  serviceId?: SortOrder;
  status?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
};
