import { IsString } from 'class-validator';

export class AccountListDto {
  @IsString()
  market: string;
}
