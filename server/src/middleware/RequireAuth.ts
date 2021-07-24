import { Request, Response, NextFunction } from "express";

// an express way to deal with checking if a user is signed in
// - as if a user is hitting a protected route

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403).send("Not permitted");
}
