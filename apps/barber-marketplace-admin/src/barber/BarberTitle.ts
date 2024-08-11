import { Barber as TBarber } from "../api/barber/Barber";

export const BARBER_TITLE_FIELD = "name";

export const BarberTitle = (record: TBarber): string => {
  return record.name?.toString() || String(record.id);
};
