import { BarberWhereUniqueInput } from "../barber/BarberWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type BookingUpdateInput = {
  barber?: BarberWhereUniqueInput | null;
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  service?: ServiceWhereUniqueInput | null;
  status?: "Option1" | null;
  time?: Date | null;
};
