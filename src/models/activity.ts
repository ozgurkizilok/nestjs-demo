import mongoose from 'mongoose';
import { ActivityType } from './activityType';
import { Audit } from './audit';
export class Activity {
    id:string;
    name:string;
    audit:Audit;
    type:ActivityType;
}

export const ActivitySchema = new mongoose.Schema({
    name: {
      type: String,
      unique: [true, 'Activity Name must be unique'],
      required: [true, 'Activity Name is required'],
    },
    audit: { type: Object },
    type: { type: Object, required: [true, 'Activity Type is required'] },
  });