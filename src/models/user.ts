import { Group } from './group';
import { Role } from './role';
import { RouterModule } from '@nestjs/core';
import { Audit } from './audit';
import * as mongoose from 'mongoose';

export class User {
  id: string;
  name: string;
  surname: string;
  image: string;
  email: string;
  password: string;
  birthday: Date;
  audit: Audit;
  roles: Role;
  groups: Group[];
}

export const UserSchema = new mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  birthday: String,
  audit: String,
  roles: Array,
  groups: Array,
});
