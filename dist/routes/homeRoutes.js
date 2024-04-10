"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _Home_Controller = require('../controllers/Home_Controller'); var _Home_Controller2 = _interopRequireDefault(_Home_Controller);

const router = new (0, _express.Router)();

router.get("/", _Home_Controller2.default.index);

exports. default = router;

/*
index => lista todos os usuarios -> GET
store/create => cria um novo usuario -> POST
delete => deletar um usuario -> DELETE
show => mostra usuario -> GET
update => atualizar um usuario -> PATCH OU PUT
*/
