import { Exclude } from 'class-transformer';
import { $Enums, User } from '@loar/database';

export class UserEntity implements User {
  id: bigint;
  email: string;
  name: string;
  avatar: string;
  @Exclude()
  password: string;
  gender: $Enums.GENDER;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
