"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Arquivo = require('../models/Arquivo'); var _Arquivo2 = _interopRequireDefault(_Arquivo);

class AlunoController{
  async index(req, res){
    const alunos = await _Aluno2.default.findAll({
      attributes: ["id", "nome", "sobrenome", "idade", "email"],
      order: [["id", "DESC"], [_Arquivo2.default, "id", "DESC"]],
      include: {
        model: _Arquivo2.default,
        attributes: ["url", "filename"],
      },
    });
    return res.json(alunos);
  }

  async show(req, res){
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ erros: ["Id inválid"] });

      const student = await _Aluno2.default.findByPk(id, {
        attributes: ["id", "nome", "sobrenome", "idade", "email"],
        order: [["id", "DESC"], [_Arquivo2.default, "id", "DESC"]],
        include: {
          model: _Arquivo2.default,
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
      const student = await _Aluno2.default.create(req.body);
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

      const student = await _Aluno2.default.findByPk(id);

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

      const student = await _Aluno2.default.findByPk(id);

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
exports. default = new AlunoController();
