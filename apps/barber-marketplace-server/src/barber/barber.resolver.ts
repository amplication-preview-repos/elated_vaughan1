import * as graphql from "@nestjs/graphql";
import { BarberResolverBase } from "./base/barber.resolver.base";
import { Barber } from "./base/Barber";
import { BarberService } from "./barber.service";

@graphql.Resolver(() => Barber)
export class BarberResolver extends BarberResolverBase {
  constructor(protected readonly service: BarberService) {
    super(service);
  }
}
