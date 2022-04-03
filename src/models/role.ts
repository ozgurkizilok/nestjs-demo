import mongoose from 'mongoose';
import { Audit } from './audit';
export class Role {
    id:string;
    name:string;
    audit:Audit;
}

export const RoleSchema = new mongoose.Schema({
    name: {
      type: String,
      unique: [true, 'Role Name must be unique'],
      required: [true, 'Role Name is required'],
    },
    audit: { type: Object },
  });