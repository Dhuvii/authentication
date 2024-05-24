import express from 'express';
import jwt from 'jsonwebtoken';

export default async function (req: express.Request, res: express.Response, next: express.NextFunction) {
  //get the token from the header
  const authHeader = req.headers['authorization'];

  //check if not token
  if (!authHeader) {
    return res.status(401).json({ code: 'no-token', msg: 'No Token, Authorization Denied' });
  }

  const token = authHeader.split('Bearer ')[1];

  console.log({ token, sec: process.env.JWT_SECRET! });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as unknown as { id: string; iat: string } | null;

    if (decoded) {
      //@ts-ignore
      req.userid = decoded.id;
    }

    next();
  } catch (error) {
    console.log({ error });
    res.status(401).json({ code: 'invalid-token', msg: 'Token is Not Valid' });
  }
}
