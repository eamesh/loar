import { Exclude, Transform } from 'class-transformer';
import { $Enums, Member, Prisma } from '@loar/database';
import { Decimal } from '@loar/database/generated/prisma-client/runtime/library';

export class MemberEntity implements Member {
  id: bigint;
  email: string;
  name: string;
  avatar: string;
  @Exclude()
  password: string;
  gender: $Enums.GENDER;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<MemberEntity>) {
    Object.assign(this, partial);
  }
  lastLoginTime: Date;
  address: string;
  accountBalance: Prisma.JsonValue;
  status: number;
  type: number;

  @Transform(({ value }) => value.toNumber())
  balance: Decimal;
  @Transform(({ value }) => value.toNumber())
  unBalance: Decimal;
  @Transform(({ value }) => value.toNumber())
  lockBalance: Decimal;
}
