"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _Arquivo = require('../models/Arquivo'); var _Arquivo2 = _interopRequireDefault(_Arquivo);

const models = [_Aluno2.default, _User2.default, _Arquivo2.default];

const connecttion = new (0, _sequelize2.default)(_database2.default); // conectando a base de dados

models.forEach((model) => model.init(connecttion));
models.forEach((model) => {
  if (model.associate){
    model.associate(connecttion.models);
  }
});
