import { $Enums, Stock } from '@loar/database';

export class UserEntity implements Stock {
  id: bigint;
  code: string;
  symbol: string;
  name: string;
  cname: string;
  type: string;
  logo: string;
  sok: string;
  optional: boolean;
  status: $Enums.STOCK_STATUS;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
