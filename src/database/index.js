import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import Aluno from "../models/Aluno";
import User from "../models/User";
import Arquivo from "../models/Arquivo";

const models = [Aluno, User, Arquivo];

const connecttion = new Sequelize(databaseConfig); // conectando a base de dados

models.forEach((model) => model.init(connecttion));
models.forEach((model) => {
  if (model.associate){
    model.associate(connecttion.models);
  }
});
