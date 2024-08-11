import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type BarberWhereInput = {
  availability?: BooleanNullableFilter;
  bookings?: BookingListRelationFilter;
  id?: StringFilter;
  latitude?: FloatNullableFilter;
  location?: StringNullableFilter;
  longitude?: FloatNullableFilter;
  name?: StringNullableFilter;
  ratings?: IntNullableFilter;
  services?: StringNullableFilter;
};
