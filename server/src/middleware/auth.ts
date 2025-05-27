import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface IDecodedToken {
  userId: string;
  role: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: IDecodedToken;
    }
  }
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('x-auth-token');
  
  if (!token) {
    return res.status(401).json({ msg: 'No hay token, autorización denegada' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'defaultsecret') as IDecodedToken;
    req.user = decoded;
    next();
  } catch (err: unknown) {
    res.status(401).json({ msg: 'Token no válido' });
  }
};

export const checkRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ msg: 'No autorizado' });
    }
    
    if (roles.includes(req.user.role)) {
      next();
    } else {
      res.status(403).json({ msg: 'No tienes permiso para realizar esta acción' });
    }
  };
};
