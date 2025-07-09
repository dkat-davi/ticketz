import { Router } from "express";
import isAuth from "../middleware/isAuth";
import isAdmin from "../middleware/isAdmin";
import WhatsAppSessionController from "../controllers/WhatsAppSessionController";
import isSupervisor from "../middleware/isSupervisor";

const whatsappSessionRoutes = Router();

whatsappSessionRoutes.post(
  "/whatsappsession/:whatsappId",
  isAuth,
  isAdmin,
  WhatsAppSessionController.store
);

whatsappSessionRoutes.put(
  "/whatsappsession/:whatsappId",
  isAuth,
  isSupervisor,
  WhatsAppSessionController.update
);

whatsappSessionRoutes.delete(
  "/whatsappsession/:whatsappId",
  isAuth,
  isSupervisor,
  WhatsAppSessionController.remove
);

whatsappSessionRoutes.get(
  "/whatsappsession/refresh/:whatsappId",
  isAuth,
  isSupervisor,
  WhatsAppSessionController.refresh
);

export default whatsappSessionRoutes;
