import { PrismaClient } from "../generated/prisma-client";

declare global {
  var prisma: PrismaClient | undefined;
}
export * from "../generated/prisma-client";

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
