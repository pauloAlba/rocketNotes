const { Router } = require("express")

const usersRouter = require("./users.routers")

const routes = Router()
routes.use("/users", usersRouter)

module.exports = routes