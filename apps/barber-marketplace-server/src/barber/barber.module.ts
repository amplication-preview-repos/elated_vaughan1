import { Module } from "@nestjs/common";
import { BarberModuleBase } from "./base/barber.module.base";
import { BarberService } from "./barber.service";
import { BarberController } from "./barber.controller";
import { BarberResolver } from "./barber.resolver";

@Module({
  imports: [BarberModuleBase],
  controllers: [BarberController],
  providers: [BarberService, BarberResolver],
  exports: [BarberService],
})
export class BarberModule {}
