const { Router, request } = require("express");

const UsersController = require("../controllers/UsersController.js");

const usersRouters = Router();

const usersController = new UsersController();

usersRouters.post("/", usersController.create);

module.exports = usersRouters;
