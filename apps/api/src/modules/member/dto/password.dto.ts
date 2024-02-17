import { IsString, MinLength } from 'class-validator';

export class PasswordDto {
  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @MinLength(6)
  oldPassword: string;
}
