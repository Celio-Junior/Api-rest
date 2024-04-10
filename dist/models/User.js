"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
// eslint-disable-next-line import/no-extraneous-dependencies
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class User extends _sequelize.Model{
  static init(sequelize){ // sequelize é paramnetor da conexão do base dados
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [4, 40],
            msg: "Campo deve ter entre 4 a 40 caracteres",
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
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
        type: _sequelize2.default.STRING,
        defaultValue: "",
      },
      password: {
        type: _sequelize2.default.VIRTUAL,
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
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8);
      }
    });
    return this;
  }

  passwordValid(password){
    return _bcryptjs2.default.compareSync(password, this.password_hash);
  }
} exports.default = User;
