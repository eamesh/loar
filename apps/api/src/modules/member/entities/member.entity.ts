import { Exclude } from 'class-transformer';
import { $Enums, User } from '@loar/database';

export class MemberEntity implements User {
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
}
