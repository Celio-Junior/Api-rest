import Sequelize, { Model } from "sequelize";
// eslint-disable-next-line import/no-extraneous-dependencies
import bcryptjs from "bcryptjs";

export default class User extends Model{
  static init(sequelize){ // sequelize é paramnetor da conexão do base dados
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [4, 40],
            msg: "Campo deve ter entre 4 a 40 caracteres",
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: "",
        unique: {
          msg: "Email já existente",
        },
        validate: {
          isEmail: {
            msg: "Email inválido",
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: "",
        validate: {
          len: {
            args: [6, 20],
            msg: "Senha precisa ter entre 6 a 20 caracteres",
          },
        },
      },
    }, { sequelize });
    this.addHook("beforeSave", async (user) => {
      if (user.password){
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });
    return this;
  }

  passwordValid(password){
    return bcryptjs.compareSync(password, this.password_hash);
  }
}
