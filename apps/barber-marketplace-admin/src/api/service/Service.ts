import { Booking } from "../booking/Booking";

export type Service = {
  bookings?: Array<Booking>;
  createdAt: Date;
  description: string | null;
  duration: number | null;
  id: string;
  price: number | null;
  updatedAt: Date;
};
