import { BookingCreateNestedManyWithoutCustomersInput } from "./BookingCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  bookings?: BookingCreateNestedManyWithoutCustomersInput;
  name?: string | null;
};
