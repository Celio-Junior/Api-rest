"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

var _User_Controller = require('../controllers/User_Controller'); var _User_Controller2 = _interopRequireDefault(_User_Controller);

const router = new (0, _express.Router)();

// router.post("/", userController.store);
router.get("/", _loginRequired2.default, _User_Controller2.default.index);// lista todos usuarios(main informations)?
// router.get("/:id", userController.show);// talvez ver um usuário
router.put("/", _loginRequired2.default, _User_Controller2.default.update);// usuário(cliente) ele tem que atualizar só o perfil dele, se for pra atualizar user, a pessoa tem quer ser admin
router.delete("/", _loginRequired2.default, _User_Controller2.default.delete); // isso aplica no mesmo conceito do update
exports. default = router;
