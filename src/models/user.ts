import { Group } from './group';
import { Role } from './role';
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
  name: { type: String, required: [true, 'User name is required'] },
  surname: { type: String, required: [true, 'User surname is required'] },
  image: { type: String },
  email: {
    type: String,
    lowercase: true,
    required: [true, 'User Email address is required']
  },
  password: { type: String, required: [true, 'User password is required'] },
  birthDay: { type: Date, required: [true, 'User birthDay is required'] },
  audit: { type: Object },
  roles: { type: Array },
  groups: { type: Array },
});