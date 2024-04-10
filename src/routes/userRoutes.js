import { Router } from "express";

import loginRequired from "../middlewares/loginRequired";

import userController from "../controllers/User_Controller";

const router = new Router();

// router.post("/", userController.store);
router.get("/", loginRequired, userController.index);// lista todos usuarios(main informations)?
// router.get("/:id", userController.show);// talvez ver um usuário
router.put("/", loginRequired, userController.update);// usuário(cliente) ele tem que atualizar só o perfil dele, se for pra atualizar user, a pessoa tem quer ser admin
router.delete("/", loginRequired, userController.delete); // isso aplica no mesmo conceito do update
export default router;
