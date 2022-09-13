import { Controller, Get, Query, Res } from "@nestjs/common";
import { Response } from "express";
import { AppGetterService } from "./app-getter.service";
import { GetRepositoryDto } from "./dto/get-repository.dto";

@Controller("api/app-getter")
export class AppGetterController {
  constructor(private appGetterService: AppGetterService) {}

  @Get()
  async getRepository(@Query() query: GetRepositoryDto, @Res() res: Response) {
    res.set({
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${query.name}.zip"`,
    });
    return this.appGetterService.getRepository(query.path, query.name, res);
  }
}
