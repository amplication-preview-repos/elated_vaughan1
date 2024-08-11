import { Barber } from "../barber/Barber";
import { Customer } from "../customer/Customer";
import { Service } from "../service/Service";

export type Booking = {
  barber?: Barber | null;
  createdAt: Date;
  customer?: Customer | null;
  date: Date | null;
  id: string;
  service?: Service | null;
  status?: "Option1" | null;
  time: Date | null;
  updatedAt: Date;
};
