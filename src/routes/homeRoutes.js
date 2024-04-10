import { Router } from "express";

import homeController from "../controllers/Home_Controller";

const router = new Router();

router.get("/", homeController.index);

export default router;

/*
index => lista todos os usuarios -> GET
store/create => cria um novo usuario -> POST
delete => deletar um usuario -> DELETE
show => mostra usuario -> GET
update => atualizar um usuario -> PATCH OU PUT
*/
