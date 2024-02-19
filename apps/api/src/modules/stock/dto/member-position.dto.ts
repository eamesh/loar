import { IsNumber, IsOptional, IsString } from 'class-validator';

export class MemberPositionDto {
  @IsString()
  market: string;

  @IsNumber()
  @IsOptional()
  status: number;
}
