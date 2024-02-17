import { IsNumber, IsString } from 'class-validator';

export class OrderSubscribeDto {
  @IsNumber()
  amount: number;

  @IsString()
  market: string;

  @IsNumber()
  money: number;

  @IsNumber()
  type: string;
}
