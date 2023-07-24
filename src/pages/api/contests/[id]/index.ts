import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { contestValidationSchema } from 'validationSchema/contests';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.contest
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getContestById();
    case 'PUT':
      return updateContestById();
    case 'DELETE':
      return deleteContestById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getContestById() {
    const data = await prisma.contest.findFirst(convertQueryToPrismaUtil(req.query, 'contest'));
    return res.status(200).json(data);
  }

  async function updateContestById() {
    await contestValidationSchema.validate(req.body);
    const data = await prisma.contest.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteContestById() {
    const data = await prisma.contest.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
