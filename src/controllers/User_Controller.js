import User from "../models/User";

class UserController{
  async store(req, res){
    try {
      const user = await User.create(req.body);
      return res.json(user);
    } catch (err){
      console.log(err);
      return res.status(400).json({
        erros: err.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res){
    try {
      // const users = await User.findAll();
      const users = await User.findAll({ attributes: ["id", "nome", "email"] });
      console.log(req.userId, req.userEmail);
      return res.json(users);
    } catch (e){
      return res.json(null);
    }
  }

  async show(req, res){
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      return res.json(user);
    } catch (e){
      console.log(e);
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res){
    try {
      // req.params.id
      // if (!req.userId){
      //   return res.status(400).json({
      //     erros: ["ID não enviado"],
      //   });
      // }

      const user = await User.findByPk(req.userId);

      if (!user){
        return res.status(400).json({
          erros: ["Usuário não existe"],
        });
      }
      const novoDados = await user.update(req.body);
      return res.json(novoDados);
    } catch (e){
      console.log(e);
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res){
    try {
      // if (!req.params.id){
      //   return res.status(400).json({
      //     erros: ["ID não enviado"],
      //   });
      // }

      const user = await User.findByPk(req.userId);

      if (!user){
        return res.status(400).json({
          erros: ["Usuário não existe"],
        });
      }
      await user.destroy(req.body);
      return res.json(user);
    } catch (e){
      console.log(e);
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
