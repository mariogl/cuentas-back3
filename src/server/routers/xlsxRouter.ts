import express from "express";
import multer from "multer";
import loadXLSX from "../controllers/xlsx.js";
import { uploadsDirectory, maxUploadSize } from "../utils/constants.js";

const upload = multer({
  dest: uploadsDirectory,
  limits: {
    fileSize: maxUploadSize,
  },
});

const xlsxRouter = express.Router();

xlsxRouter.post("/", upload.single("xlsx"), loadXLSX);

export default xlsxRouter;
