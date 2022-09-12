import { Injectable } from "@nestjs/common";
import * as degit from "degit";
import { join } from "path";
import * as adzip from "adm-zip";
import { Response } from "express";
import { createReadStream } from "fs";
import * as rimraf from "rimraf";
@Injectable()
export class AppGetterService {
  private tmpDir = "/tmp";

  async getRepository(
    repositoryPath: string,
    destName: string,
    response: Response
  ) {
    const tmpDirFullPath = join(this.tmpDir, destName);
    const emitter = degit(repositoryPath, {
      cache: false,
      force: true,
      verbose: true,
    });
    emitter.on("info", (info) => console.log(info.message));
    emitter.clone(tmpDirFullPath).then(async () => {
      const pathToZip = await this.createZipArchive(tmpDirFullPath, destName);
      if (pathToZip) {
        const zipFile = createReadStream(pathToZip);
        zipFile.pipe(response);
        rimraf(tmpDirFullPath, () => console.log("Deleted tmp directory."));
      }
    });
  }

  async createZipArchive(localFolderPath: string, outputName: string) {
    try {
      const zip = new adzip();
      const fullPathToZip = join(localFolderPath, outputName);
      const outputFile = `${fullPathToZip}.zip`;
      zip.addLocalFolder(localFolderPath);
      zip.writeZip(outputFile);
      console.log(`Successfully created ${outputFile}.`);
      return outputFile;
    } catch (e) {
      console.error(e);
    }
  }
}
