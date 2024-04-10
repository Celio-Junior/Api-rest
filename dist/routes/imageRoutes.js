"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
// import multer from "multer";
// importante colocar as importações de modulos primero do que as locais
var _ImgController = require('../controllers/ImgController'); var _ImgController2 = _interopRequireDefault(_ImgController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);
// import multerConfig from "../config/multerConfig";

// const upload = multer(multerConfig);
const router = new (0, _express.Router)();

// router.post("/", upload.single("arquivo"), imageController.store); // receber unico arquivo
router.post("/", _loginRequired2.default, _ImgController2.default.store); // receber unico arquivo
// upload.fields => varios arquivos

exports. default = router;
