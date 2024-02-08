import { $Enums, Prisma } from '@loar/database';
import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';

export enum StockStatus {
  DISABLE,
  NORMAL,
  DOWN,
}

export class CreateStockDto implements Prisma.StockCreateInput {
  @IsString()
  code: string;

  @IsString()
  symbol: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  cname?: string;

  @IsString()
  type: string;

  @IsString()
  @IsOptional()
  logo?: string;

  @IsString()
  @IsOptional()
  sok?: string;

  @IsBoolean()
  @IsOptional()
  optional?: boolean = false;

  @IsEnum(StockStatus)
  @IsOptional()
  status?: $Enums.STOCK_STATUS;
}
