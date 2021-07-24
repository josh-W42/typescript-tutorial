import { Router } from "express";
import { controllers } from "../controllers";
import { requireAuth } from "../middleware/RequireAuth";

const router = Router();

router.get("/login", controllers.auth.showLogin);
router.get("/logout", requireAuth, controllers.auth.logout);
router.post("/login", controllers.auth.login);

export { router };
