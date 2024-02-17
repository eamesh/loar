import {
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateMarketDto {
  @IsString()
  code: string;

  @IsString()
  currency: string;

  @IsOptional()
  @IsNumberString()
  maxWithdrawal: string;

  @IsOptional()
  @IsNumberString()
  minWithdrawal: string;

  @IsOptional()
  @IsNumberString()
  feeRate: string;

  @IsOptional()
  @IsNumberString()
  minFee: string;

  @IsOptional()
  @IsString()
  lever: string;

  @IsOptional()
  @IsNumberString()
  mmr: string;

  @IsOptional()
  @IsNumberString()
  allocationRate: string;

  @IsOptional()
  @IsNumber()
  frequency: number;

  @IsOptional()
  @IsNumber()
  bindingHours: number;

  @IsOptional()
  headSymbols: string;
}
