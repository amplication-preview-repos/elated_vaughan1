import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ServiceWhereInput = {
  bookings?: BookingListRelationFilter;
  description?: StringNullableFilter;
  duration?: IntNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
};
