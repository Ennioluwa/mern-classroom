import express from "express";
import {
  courseById,
  create,
  getPublished,
  isCourseAuthorized,
  listByInstructor,
  newLesson,
  photo,
  read,
  remove,
  update,
} from "../controllers/course.controller";
import { isEducator } from "../controllers/user.controller";
import { signIn } from "../middlewares";

const router = express.Router();
router.param("courseId", courseById);
router.get("/api/courses/published", getPublished);
router.route("/api/courses").post(signIn, isEducator, create);
router.route("/api/course/image/:courseId").get(photo);
router.get("/api/mycourse", signIn, listByInstructor);
router
  .route("/api/courses/:courseId")
  .get(read)
  .put(signIn, isCourseAuthorized, update)
  .delete(signIn, isCourseAuthorized, remove);

router
  .route("/api/courses/:courseId/lesson/new")
  .put(signIn, isEducator, isCourseAuthorized, newLesson);

export default router;
