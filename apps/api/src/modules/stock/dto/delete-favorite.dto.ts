import { IsArray } from 'class-validator';

export class DeleteFavoriteDto {
  @IsArray()
  ids: number[];
}
