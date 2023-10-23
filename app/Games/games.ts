// pages/api/downloadJavaFiles.ts
import { join } from "path";
import { readFile } from "fs/promises";
import { NextApiRequest, NextApiResponse } from "next";

// types/javaFiles.ts
export interface JavaFilesConfig {
  [fileName: string]: string;
}

// Load the configuration file
const javaFilesConfig: JavaFilesConfig = require("./gameLink.json");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const downloadLinks = [];

    for (const [fileName, filePath] of Object.entries(javaFilesConfig)) {
      const fileContent = await readFile(join(process.cwd(), filePath), "utf8");
      const dataURI = `data:text/plain;charset=utf-8,${encodeURIComponent(
        fileContent
      )}`;
      downloadLinks.push({
        fileName,
        link: dataURI,
      });
    }

    res.json(downloadLinks);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
