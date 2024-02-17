import { IsNumber } from 'class-validator';

export class FavoriteDto {
  @IsNumber()
  status: number;
}
