import { Module } from '@nestjs/common';
import { AppGetterService } from './app-getter.service';
import { AppGetterController } from './app-getter.controller';

@Module({
  providers: [AppGetterService],
  controllers: [AppGetterController]
})
export class AppGetterModule {}
