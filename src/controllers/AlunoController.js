import Aluno from "../models/Aluno";
import Arquivo from "../models/Arquivo";

class AlunoController{
  async index(req, res){
    const alunos = await Aluno.findAll({
      attributes: ["id", "nome", "sobrenome", "idade", "email"],
      order: [["id", "DESC"], [Arquivo, "id", "DESC"]],
      include: {
        model: Arquivo,
        attributes: ["url", "filename"],
      },
    });
    return res.json(alunos);
  }

  async show(req, res){
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ erros: ["Id inválid"] });

      const student = await Aluno.findByPk(id, {
        attributes: ["id", "nome", "sobrenome", "idade", "email"],
        order: [["id", "DESC"], [Arquivo, "id", "DESC"]],
        include: {
          model: Arquivo,
          attributes: ["url", "filename"],
        },
      });

      if (!student) {
        return res.status(400).json({
          erros: ["Student not found"],
        });
      }
      return res.json(student);
    } catch (e){
      console.log(e);
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }

  async store(req, res){
    try {
      const student = await Aluno.create(req.body);
      return res.json(student);
    } catch (e){
      console.log(e);
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res){
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ erros: ["Id inválid"] });

      const student = await Aluno.findByPk(id);

      if (!student) {
        return res.status(400).json({
          erros: ["Student not found"],
        });
      }

      const studentNew = await student.update(req.body);
      return res.json(studentNew);
    } catch (e){
      console.log(e);
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res){
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ erros: ["Id inválid"] });

      const student = await Aluno.findByPk(id);

      if (!student) {
        return res.status(400).json({
          erros: ["Student not found"],
        });
      }

      await student.destroy();
      return res.json({ result: "usuário deletado com sucesso" });
    } catch (e){
      console.log(e);
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }
}
export default new AlunoController();
