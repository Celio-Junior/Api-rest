"use strict";Object.defineProperty(exports, "__esModule", {value: true});// import Aluno from "../models/Aluno";

class HomeController{
  async index(req, res){
    // const aluno = await Aluno.create({
    //   nome: "Celio Junior",
    //   sobrenome: "Rodrigues",
    //   idade: "18",
    //   email: "demon@gmail.com",
    // });
    return res.status(200).json("teste");
    // res.status(200).json(aluno);
  }
}

exports. default = new HomeController();
