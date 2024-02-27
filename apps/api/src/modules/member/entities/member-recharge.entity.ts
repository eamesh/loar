import { MemberRecharge, Prisma } from '@loar/database';
import { Decimal } from '@loar/database/generated/prisma-client/runtime/library';
import { Transform } from 'class-transformer';

export class MemberRechargeEntity implements MemberRecharge {
  id: bigint;

  @Transform(({ value }) => value.toNumber())
  money: Decimal;
  screen: Prisma.JsonValue;
  memberId: bigint;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<MemberRechargeEntity>) {
    Object.assign(this, partial);
  }
  market: string;

  @Transform(({ value }) => value.toNumber())
  rechargeMoney: Prisma.Decimal;
  status: number;
}
