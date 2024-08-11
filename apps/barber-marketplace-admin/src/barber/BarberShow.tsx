import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BARBER_TITLE_FIELD } from "./BarberTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { SERVICE_TITLE_FIELD } from "../service/ServiceTitle";

export const BarberShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="availability" source="availability" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="latitude" source="latitude" />
        <TextField label="location" source="location" />
        <TextField label="longitude" source="longitude" />
        <TextField label="name" source="name" />
        <TextField label="ratings" source="ratings" />
        <TextField label="services" source="services" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Booking"
          target="barberId"
          label="Bookings"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="barber"
              source="barber.id"
              reference="Barber"
            >
              <TextField source={BARBER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="date" source="date" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="service"
              source="service.id"
              reference="Service"
            >
              <TextField source={SERVICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <TextField label="time" source="time" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
