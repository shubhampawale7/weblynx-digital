// server/src/routes/contactRoutes.js
import { Router } from "express";
import { submitContactForm } from "../controllers/contactController.js";

const router = Router();

router.post("/", submitContactForm); // POST request to /api/contact

export default router;
