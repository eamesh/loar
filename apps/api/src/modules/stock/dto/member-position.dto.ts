import { IsString } from 'class-validator';

export class MemberPositionDto {
  @IsString()
  market: string;
}
