"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model{
  static init(sequelize){ // isso a conecaão
    super.init({ // validando os valores, o propio model
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [3, 30],
            msg: ["O campo nome precisa ter 3 a 30 caracteres"],
          },
        },
      },
      sobrenome: {
        type: _sequelize2.default.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [3, 30],
            msg: ["O campo nome precisa ter 3 a 30 caracteres"],
          },
        },
      },
      idade: {
        type: _sequelize2.default.INTEGER,
        defaultValue: "",
        validate: {
          isInt: {
            msg: "O campo idade precisa ser número",
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: "",
        unique: {
          msg: "Já tem um email existente, tente outro",
        },
        validate: {
          isEmail: {
            msg: ["Email inválido"],
          },
        },
      },
    }, { sequelize });
    return this;
  }

  static associate(models){
    this.hasMany(models.Arquivo, { foreignKey: "aluno_id" });
  }
} exports.default = Aluno;
