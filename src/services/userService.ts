import { UserCreateDto } from './../dtos/userDto';
import { User } from './../models/user';
import { Injectable } from '@nestjs/common';

const result: User[] = [];

@Injectable()
export class UserService {
  getAllUsers(): User[] {
    if (result.length === 0) {
      this.creatingMockUser({
        birthday: new Date(),
        email: 'ozgurkizilok@gmail.com',
        name: 'Özgür',
        surname: 'Kızılok',
        password: '12345',
      });
    }

    return result;
  }

  createUser(body: UserCreateDto) {
    const isExist = result.find((res) => {
      res.email === body.email;
    });
    if (isExist) {
      return isExist;
    } else {
      this.creatingMockUser(body);
      return result.slice(result.length - 1, result.length);
    }
  }

  private creatingMockUser(data: any) {
    const user = new User();
    user.birthday = data.birthday;
    user.email = data.email;
    user.name = data.name;
    user.surname = data.surname;
    user.password = data.password;

    user.id=(Math.floor(Math.random() * 60) + 1).toString();

    result.push(user);
  }

  getUserById(id):any{
      const user = result.find(data=>data.id==id);

      if(!user){
          return "user does not exist";
      } else {
          return user;
      }

  }
}
