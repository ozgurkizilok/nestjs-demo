import mongoose from 'mongoose';
import { Audit } from './audit';
export class TicketType {
    id:string;
    name:string;
    audit:Audit;
}

export const TicketTypeSchema = new mongoose.Schema({
    name: {
      type: String,
      unique: [true, 'Ticket Type Name must be unique'],
      required: [true, 'Ticket Type Name is required'],
    },
    audit: { type: Object },
  });