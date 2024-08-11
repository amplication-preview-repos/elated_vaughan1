import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  DateField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const BarberList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Barbers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
