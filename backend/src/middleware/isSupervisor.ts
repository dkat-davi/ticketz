import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";
import User from "../models/User";

const isSupervisor = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const { profile } = await User.findByPk(req.user.id);
  if (!["admin", "supervisor"].includes(profile)) {
    throw new AppError("Acesso não permitido", 403);
  }

  return next();
};

export default isSupervisor;
