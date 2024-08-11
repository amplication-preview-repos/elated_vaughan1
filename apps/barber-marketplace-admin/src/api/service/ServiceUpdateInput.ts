import { BookingUpdateManyWithoutServicesInput } from "./BookingUpdateManyWithoutServicesInput";

export type ServiceUpdateInput = {
  bookings?: BookingUpdateManyWithoutServicesInput;
  description?: string | null;
  duration?: number | null;
  price?: number | null;
};
