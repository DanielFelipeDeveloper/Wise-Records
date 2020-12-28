import { NextFunction, Request, Response } from 'express';
import AuthenticateAdminService from '../services/AuthenticateAdminService';

export default async function ensureAdminAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const userId = request.user.id;
    const authenticateAdminService = new AuthenticateAdminService();

    const verifyAdmin = await authenticateAdminService.execute(userId);

    if (verifyAdmin) {
      request.user.roles = 'admin';
    }

    return next();
  } catch (err) {
    throw new Error(`User is not an Admin! ${err.message}`);
  }
}
