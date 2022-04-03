import mongoose from "mongoose";
import { Audit } from "./audit";

export class ActivityType {
    id:string;
    name:string;
    audit:Audit;
}

export const ActivityTypeSchema = new mongoose.Schema({
    name: {
      type: String,
      unique: [true, 'Activity Type Name must be unique'],
      required: [true, 'ActivityType Name is required'],
    },
    audit: { type: Object },
  });