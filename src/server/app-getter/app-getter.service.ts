import { Injectable } from "@nestjs/common";
import * as degit from "degit";
import { join } from "path";

@Injectable()
export class AppGetterService {
  async getRepository(repositoryPath: string) {
    const emitter = degit(repositoryPath, {
      cache: false,
      force: true,
      verbose: true,
    });
    emitter.on("info", (info) => console.log(info.message));
    emitter
      .clone(join(process.cwd(), "test"))
      .then(() => console.log("done cloning"));
  }
}
