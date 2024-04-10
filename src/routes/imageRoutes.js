import { Router } from "express";
// import multer from "multer";
// importante colocar as importações de modulos primero do que as locais
import imageController from "../controllers/ImgController";
import loginRequired from "../middlewares/loginRequired";
// import multerConfig from "../config/multerConfig";

// const upload = multer(multerConfig);
const router = new Router();

// router.post("/", upload.single("arquivo"), imageController.store); // receber unico arquivo
router.post("/", loginRequired, imageController.store); // receber unico arquivo
// upload.fields => varios arquivos

export default router;
