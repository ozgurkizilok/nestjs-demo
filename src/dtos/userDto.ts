import { Group } from "src/models/group";
import { Role } from "src/models/role";

export class UserCreateDto {
  name: string;
  surname: string;
  image:string;
  password: string;
  email:string;
  birthday: Date;
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
