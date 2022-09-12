import { Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { AppGetterModule } from './app-getter/app-getter.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "..", "..", "dist", "client"),
      exclude: ["api*"],
    }),
    AppGetterModule,
  ],
})
export class AppModule {}
