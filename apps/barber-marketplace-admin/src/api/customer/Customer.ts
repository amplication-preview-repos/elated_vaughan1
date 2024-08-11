import { Booking } from "../booking/Booking";

export type Customer = {
  bookings?: Array<Booking>;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
