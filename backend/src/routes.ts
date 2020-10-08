import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { createConnectionController } from "./useCases/CreateConnection";
import multer from "multer";
import multerConfig from "./config/multer";
import { createSubjectsController } from "./useCases/CreateSubjects";

const upload = multer(multerConfig);
const routes = Router();

routes.post("/users", upload.single("avatar"), (req, res) => {
  return createUserController.handle(req, res);
});
routes.get("/user/:id", (req, res) => {
  return createUserController.list(req, res);
});
routes.get("/users", (req, res) => {
  return createUserController.index(req, res);
});
routes.post("/connection", (req, res) => {
  return createConnectionController.handle(req, res);
});
routes.get("/connection", (req, res) => {
  return createConnectionController.index(req, res);
});
routes.get("/subjects", (req, res) => {
  return createSubjectsController.index(req, res);
});
export { routes };
