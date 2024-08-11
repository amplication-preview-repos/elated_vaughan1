import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BarberServiceBase } from "./base/barber.service.base";

@Injectable()
export class BarberService extends BarberServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
