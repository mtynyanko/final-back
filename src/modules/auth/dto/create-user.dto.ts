import {
  IsString,
  MinLength,
  IsEmail,
  IsNotEmpty,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: 'password is too short' })
  password: string;

  @IsEmail()
  @IsNotEmpty()
  @Matches(/\S/, { message: 'Value should not be only spaces' })
  email: string;

  @IsNotEmpty()
  @Matches(/\S/, { message: 'Value should not be only spaces' })
  login: string;
}
