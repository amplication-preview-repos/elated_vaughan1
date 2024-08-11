import { BookingUpdateManyWithoutBarbersInput } from "./BookingUpdateManyWithoutBarbersInput";

export type BarberUpdateInput = {
  availability?: boolean | null;
  bookings?: BookingUpdateManyWithoutBarbersInput;
  latitude?: number | null;
  location?: string | null;
  longitude?: number | null;
  name?: string | null;
  ratings?: number | null;
  services?: string | null;
};
