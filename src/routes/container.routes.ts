import { Router } from "express";

import { ContainerManagerController } from "../controllers";

const containerController = new ContainerManagerController();

export const containerRouter = Router();

containerRouter.route("/create").post(containerController.createContainer);
containerRouter.route("/list").get(containerController.listContainers);
