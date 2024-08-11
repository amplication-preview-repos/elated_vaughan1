import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { BookingTitle } from "../booking/BookingTitle";

export const BarberEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="availability" source="availability" />
        <ReferenceArrayInput
          source="bookings"
          reference="Booking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookingTitle} />
        </ReferenceArrayInput>
        <NumberInput label="latitude" source="latitude" />
        <TextInput label="location" source="location" />
        <NumberInput label="longitude" source="longitude" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="ratings" source="ratings" />
        <TextInput label="services" multiline source="services" />
      </SimpleForm>
    </Edit>
  );
};
