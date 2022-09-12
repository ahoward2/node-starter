import { Controller, Get, Query } from "@nestjs/common";
import { AppGetterService } from "./app-getter.service";

@Controller("api/app-getter")
export class AppGetterController {
  constructor(private appGetterService: AppGetterService) {}

  @Get("")
  async getRepository(@Query() query) {
    return this.appGetterService.getRepository(query.path);
  }
}
