import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { BarberTitle } from "../barber/BarberTitle";
import { CustomerTitle } from "../customer/CustomerTitle";
import { ServiceTitle } from "../service/ServiceTitle";

export const BookingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="barber.id" reference="Barber" label="barber">
          <SelectInput optionText={BarberTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <DateTimeInput label="date" source="date" />
        <ReferenceInput source="service.id" reference="Service" label="service">
          <SelectInput optionText={ServiceTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="time" source="time" />
      </SimpleForm>
    </Create>
  );
};
