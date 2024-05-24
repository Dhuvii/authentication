import { Prisma } from '@prisma/client';
import prisma from '../../../configs/prisma.config';

export const getLogs = async (where: Prisma.logFindManyArgs) => {
  return await prisma.log.findMany(where);
};
