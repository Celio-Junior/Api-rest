import jbt from "jsonwebtoken";
import User from "../models/User";

class TokenController{
  async store(req, res){
    const { password = "", email = "" } = req.body;

    if (!password || !email){
      return res.status(401).json({
        erros: "Campos vazios",
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user){
      return res.status(401).json({
        erros: ["Usuários não existe"],
      });
    }

    if (!await user.passwordValid(password)){
      return res.status(401).json({
        erros: ["Senha inválida"],
      });
    }

    const { id } = user;
    const token = jbt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

export default new TokenController();
