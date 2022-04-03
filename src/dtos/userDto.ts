import { IsDateString, IsEmail, IsNotEmpty, Length } from "class-validator";
import { Group } from "src/models/group";
import { Role } from "src/models/role";

export class UserCreateDto {
  @IsNotEmpty()
  @Length(2, 20)
  name: string;
  surname: string;
  image: string;
  password: string;
  @IsEmail()
  email: string;
  @IsDateString()
  birthDay: Date;
}

export class UserUpdateDto {
  name:string;
  surname:string;
  image:string;
  password:string;
  email:string;
  birthday:Date;
  roles:Role[];
  groups:Group[];
}

export class UserLoginDto {
  email: string;
  password: string;
}
