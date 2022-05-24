import express from "express";
import authCtrl from "../controllers/auth.controller";
import run from "../validators";
import validator from "../validators/auth.validator";

const router = express.Router();

router
  .route("/api/signin")
  .post(validator.userLoginValidator, run.runValidation, authCtrl.signin);

router.route("/api/signout").get(authCtrl.signout);

export default router;
