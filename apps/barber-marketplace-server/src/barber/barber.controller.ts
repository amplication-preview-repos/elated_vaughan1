import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BarberService } from "./barber.service";
import { BarberControllerBase } from "./base/barber.controller.base";

@swagger.ApiTags("barbers")
@common.Controller("barbers")
export class BarberController extends BarberControllerBase {
  constructor(protected readonly service: BarberService) {
    super(service);
  }
}
