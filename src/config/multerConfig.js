import multer from "multer";
import { extname, resolve } from "path";

const random = Math.round(Math.random() * (100000 - 0) + 0);

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "image/png" && file.mimetype !== "image/jpeg"){
      return cb(new multer.MulterError("arquivo precisa ser png ou jpg"));
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      // error  ou null, o primeiro paramentro é de erro, segundo paramentro é o caminho pra
      // onde tu quer jogar os arquivos
      cb(null, resolve(__dirname, "..", "..", "uploads", "images"));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}${random}${extname(file.originalname)}`);
    },
  }),
};
