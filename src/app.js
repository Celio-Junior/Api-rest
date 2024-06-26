import dotenv from "dotenv";

dotenv.config();

import "./database";

import express from "express";
import { resolve } from "path";

import homeRoutes from "./routes/homeRoutes";
import userRoutes from "./routes/userRoutes";
import tokenRoutes from "./routes/tokenRoutes";
import alunoRoutes from "./routes/alunosRoutes";
import imageRoutes from "./routes/imageRoutes";

class App {
  constructor(){
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use("/images/", express.static(resolve(__dirname, "..", "uploads", "images")));
  }

  routes(){
    this.app.use("/", homeRoutes);
    this.app.use("/users/", userRoutes);
    this.app.use("/tokens/", tokenRoutes);
    this.app.use("/alunos/", alunoRoutes);
    this.app.use("/images/", imageRoutes);
  }
}

export default new App().app;
