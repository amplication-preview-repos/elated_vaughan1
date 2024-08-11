import { BarberWhereUniqueInput } from "../barber/BarberWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type BookingWhereInput = {
  barber?: BarberWhereUniqueInput;
  customer?: CustomerWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  service?: ServiceWhereUniqueInput;
  status?: "Option1";
  time?: DateTimeNullableFilter;
};
