import {
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateMarketDto {
  @IsString()
  code: string;

  @IsString()
  currency: string;

  @IsNumberString()
  maxWithdrawal: string;

  @IsNumberString()
  minWithdrawal: string;

  @IsNumberString()
  feeRate: string;

  @IsNumberString()
  minFee: string;

  @IsString()
  lever: string;

  @IsNumberString()
  mmr: string;

  @IsNumberString()
  allocationRate: string;

  @IsNumber()
  frequency: number;

  @IsNumber()
  bindingHours: number;

  @IsOptional()
  headSymbols: string;
}
