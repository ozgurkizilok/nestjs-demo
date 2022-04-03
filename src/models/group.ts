import mongoose from 'mongoose';
import { Audit } from './audit';
import { Role } from './role';
export class Group {
    id:string;
    name:string;
    description:string;
    audit:Audit
    roles:Role[];
}

export const GroupSchema = new mongoose.Schema({
    name: {
      type: String,
      unique: [true, 'Group Name must be unique'],
      required: [true, 'Group Name is required'],
    },
    description: {
      type: String,
      required: [true, 'Group description is required'],
    },
    audit: { type: Object },
    roles: { type: Array },
  });