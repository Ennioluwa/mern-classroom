import express from "express";

const router = express.Router();

// middleware
import { signIn } from "../middlewares";
import run from "../validators";
import validator from "../validators/auth.validator";

// controllers
import {
  create,
  list,
  read,
  update,
  remove,
} from "../controllers/user.controller";

// router.post("/register", register);
// router.post("/login", login);
// router.get("/logout", logout);
// router.get("/current-user", signIn, currentUser);
// router.param("userId",userById);
router
  .route("/api/user/create")
  .post(validator.userRegisterValidator, run.runValidation, create);
router.route("/api/users").get(signIn, list);

router
  .route("/api/user")
  .get(signIn, read)
  .put(signIn, update)
  .delete(signIn, remove);

export default router;
