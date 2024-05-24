import * as argon2 from 'argon2';
import express from 'express';
import jwt from 'jsonwebtoken';
import { sendEmail } from '../../../configs/nodemailer.config';
import protectedRoute from '../../middlewares/protectedRoute';
import { createUser, getUser, updateUser } from './auth.service';
import { getLogs } from './log.service';

const router = express.Router();

router.get('/healthcheck', async (_: express.Request, res: express.Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Authentication endpoint is healthy',
  });
});

router.get('/whoami', protectedRoute, async (req: express.Request, res: express.Response) => {
  try {
    //@ts-ignore
    const id = req.userid;
    const user = await getUser({
      where: {
        id,
      },
      select: {
        id: true,
        email: true,
        name: true,
        last_logged_in: true,
      },
    });
    return res.status(200).json({
      message: 'User fetched',
      data: user,
    });
  } catch (error) {
    console.log({ error });
    res.status(500).json({
      message: 'Server error',
    });
  }
});

router.get('/logs', protectedRoute, async (req: express.Request, res: express.Response) => {
  try {
    //@ts-ignore -> As the middleware adds userid field to the header, the Request interface is not aware of this, hence this type error.
    const id = req.userid;
    const logs = await getLogs({
      where: {
        userId: id,
      },
      select: {
        loggedAt: true,
      },
      orderBy: {
        loggedAt: 'desc',
      },
    });
    return res.status(200).json({
      message: 'Logs fetched',
      data: logs,
    });
  } catch (error) {
    console.log({ error });
    res.status(500).json({
      message: 'Server error',
    });
  }
});

router.post('/register', async (req: express.Request, res: express.Response) => {
  try {
    const { name, email, password }: { name: string; email: string; password: string } = req.body;

    const hashedPassword = await argon2.hash(password);

    const user = await createUser({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!);

    return res.status(201).json({
      message: 'User created',
      data: { ...user, token },
    });
  } catch (error) {
    console.log({ error });
    res.status(500).json({
      message: 'Server error',
    });
  }
});

router.post('/login', async (req: express.Request, res: express.Response) => {
  try {
    const { email, password }: { email: string; password: string } = req.body;

    const user = await getUser({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    const isPasswordMatched = await argon2.verify(user.password, password);

    if (!isPasswordMatched) {
      return res.status(401).json({
        message: 'Invalid credentials',
      });
    }

    await updateUser({
      where: {
        id: user.id,
      },
      data: {
        last_logged_in: new Date(),
      },
    });

    await sendEmail({
      to: user.email,
      subject: 'Login Notification',
      template: 'lastLoggedIn',
      context: {
        username: user.name,
        time: new Date(),
      },
    });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!);

    return res.status(201).json({
      message: 'User logged in',
      data: { ...user, last_logged_in: new Date(), token },
    });
  } catch (error) {
    console.log({ error });
    res.status(500).json({
      message: 'Server error',
    });
  }
});

module.exports = router;
