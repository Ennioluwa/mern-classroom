import express from "express";
import { courseById } from "../controllers/course.controller";
import {
  complete,
  create,
  enrollmentById,
  enrollmentStats,
  isEnrollment,
  isStudent,
  listEnrolled,
  read,
} from "../controllers/enrollment.controller";
import { signIn } from "../middlewares";

const router = express.Router();

router.param("enrollmentId", enrollmentById);
router.param("courseId", courseById);

router.route("/api/enrollment/enrolled").get(signIn, listEnrolled);
router.route("/api/enrollment/stats/:courseId").get(enrollmentStats);
router
  .route("/api/enrollment/new/:courseId")
  .post(signIn, isEnrollment, create);
router.route("/api/enrollment/:enrollmentId").get(signIn, isStudent, read);
router
  .route("/api/enrollment/complete/:enrollmentId")
  .put(signIn, isStudent, complete);

export default router;
