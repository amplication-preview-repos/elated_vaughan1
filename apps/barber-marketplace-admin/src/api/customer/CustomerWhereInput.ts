import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CustomerWhereInput = {
  bookings?: BookingListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
