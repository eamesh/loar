import { MemberWithdraw, Prisma } from '@loar/database';
import { Transform } from 'class-transformer';

export class MemberWithdrawEntity implements MemberWithdraw {
  constructor(partial: Partial<MemberWithdrawEntity>) {
    Object.assign(this, partial);
  }
  id: bigint;
  @Transform(({ value }) => value.toNumber())
  money: Prisma.Decimal;
  remark: string;
  status: number;
  memberId: bigint;
  createdAt: Date;
  updatedAt: Date;
}
