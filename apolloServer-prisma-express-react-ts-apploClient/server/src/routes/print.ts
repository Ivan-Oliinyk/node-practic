import { Request, Response } from "express";
import { Router } from "express";
import fs from "fs";
import path from "path";
import config from "../config";

const { INTEGRATION_TRANSPORT } = config;

export const printServiceRouter = Router();

printServiceRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { review } = req.body;
    const data = JSON.stringify(review);
    const folder = INTEGRATION_TRANSPORT === "sqs" ? "sqsinput" : "restinput";
    const serverPath = path.join(__dirname, "..", "..");
    const hasFolder = fs.existsSync(serverPath + folder);
    const serviceFilePath = path.join(
      serverPath,
      folder,
      `review${Date.now()}.json`
    );

    if (!hasFolder) {
      fs.mkdirSync(`${serverPath}/${folder}`);
    }

    fs.writeFile(serviceFilePath, data, function (err) {
      if (err) {
        return res.status(500).json(err.message);
      }

      console.log(`File review${Date.now()}.json is created successfully.`);
    });

    res.status(200).json({ review, status: "ok" });
  } catch (e) {
    res.status(500).json(e);
  }
});
