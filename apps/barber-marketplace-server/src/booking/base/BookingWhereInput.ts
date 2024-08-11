/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BarberWhereUniqueInput } from "../../barber/base/BarberWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ServiceWhereUniqueInput } from "../../service/base/ServiceWhereUniqueInput";
import { EnumBookingStatus } from "./EnumBookingStatus";

@InputType()
class BookingWhereInput {
  @ApiProperty({
    required: false,
    type: () => BarberWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BarberWhereUniqueInput)
  @IsOptional()
  @Field(() => BarberWhereUniqueInput, {
    nullable: true,
  })
  barber?: BarberWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerWhereUniqueInput, {
    nullable: true,
  })
  customer?: CustomerWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  date?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ServiceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ServiceWhereUniqueInput)
  @IsOptional()
  @Field(() => ServiceWhereUniqueInput, {
    nullable: true,
  })
  service?: ServiceWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumBookingStatus,
  })
  @IsEnum(EnumBookingStatus)
  @IsOptional()
  @Field(() => EnumBookingStatus, {
    nullable: true,
  })
  status?: "Option1";

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  time?: DateTimeNullableFilter;
}

export { BookingWhereInput as BookingWhereInput };
