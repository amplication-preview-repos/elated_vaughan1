import { BookingCreateNestedManyWithoutServicesInput } from "./BookingCreateNestedManyWithoutServicesInput";

export type ServiceCreateInput = {
  bookings?: BookingCreateNestedManyWithoutServicesInput;
  description?: string | null;
  duration?: number | null;
  price?: number | null;
};
