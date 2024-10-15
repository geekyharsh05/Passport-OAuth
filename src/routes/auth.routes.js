import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";
import isLoggedIn from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", AuthController.homePage);
router.get("/google", AuthController.googleAuth);
router.get("/google/callback", AuthController.googleCallback);
router.get("/google/failure", AuthController.googleFailure);

router.get("/github", AuthController.githubAuth);
router.get("/github/callback", AuthController.githubCallback);
router.get("/github/failure", AuthController.githubFailure);

router.get("/protected", isLoggedIn, AuthController.protectedRoute);
router.get("/logout", AuthController.logout);

export default router;
