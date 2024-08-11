import { BookingCreateNestedManyWithoutBarbersInput } from "./BookingCreateNestedManyWithoutBarbersInput";

export type BarberCreateInput = {
  availability?: boolean | null;
  bookings?: BookingCreateNestedManyWithoutBarbersInput;
  latitude?: number | null;
  location?: string | null;
  longitude?: number | null;
  name?: string | null;
  ratings?: number | null;
  services?: string | null;
};
