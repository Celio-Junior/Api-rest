import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model{
  static init(sequelize){ // isso a conecaão
    super.init({ // validando os valores, o propio model
      nome: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [3, 30],
            msg: ["O campo nome precisa ter 3 a 30 caracteres"],
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [3, 30],
            msg: ["O campo nome precisa ter 3 a 30 caracteres"],
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: "",
        validate: {
          isInt: {
            msg: "O campo idade precisa ser número",
          },
        },
      },
      email: {
        type: Sequelize.STRING,
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
}
