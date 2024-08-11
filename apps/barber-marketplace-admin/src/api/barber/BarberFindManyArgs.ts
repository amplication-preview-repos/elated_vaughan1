import { BarberWhereInput } from "./BarberWhereInput";
import { BarberOrderByInput } from "./BarberOrderByInput";

export type BarberFindManyArgs = {
  where?: BarberWhereInput;
  orderBy?: Array<BarberOrderByInput>;
  skip?: number;
  take?: number;
};
