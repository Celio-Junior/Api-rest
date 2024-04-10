import multer from "multer";
import multerConfig from "../config/multerConfig";

import Arquivo from "../models/Arquivo";

const upload = multer(multerConfig).single("arquivo");
class ImageController{
  store(req, res){
    return upload(req, res, async (err) => {
      if (err){
        return res.status(400).json({ erros: [err.code] });
      }
      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await Arquivo.create({ originalname, filename, aluno_id });

        return res.json(foto);
      } catch (e){
        return res.status(400).json({ erros: ["Aluno não existe"] });
      }
    });
  }
}
export default new ImageController();
