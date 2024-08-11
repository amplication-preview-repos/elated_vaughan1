import { Booking } from "../booking/Booking";

export type Barber = {
  availability: boolean | null;
  bookings?: Array<Booking>;
  createdAt: Date;
  id: string;
  latitude: number | null;
  location: string | null;
  longitude: number | null;
  name: string | null;
  ratings: number | null;
  services: string | null;
  updatedAt: Date;
};
