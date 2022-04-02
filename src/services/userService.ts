import { ResourceService } from './../libs/services/resource.service';
import { Audit } from './../models/audit';
import { UserCreateDto, UserUpdateDto } from './../dtos/userDto';
import { User } from './../models/user';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService extends ResourceService<
  User,
  UserCreateDto,
  UserUpdateDto
> {
  constructor(@InjectModel('User') userMongo: Model<User>) {
    super(userMongo);
  }
}
