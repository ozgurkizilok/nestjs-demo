import { Inventory } from './inventory';
import { Audit } from './audit';
import { User } from './user';
import { TicketType } from "./ticketType";
import { Activity } from './Activity';
import mongoose from 'mongoose';

export class Ticket {
    id:string;
    name:string;
    description:string;
    type:TicketType;
    responsible:User;
    audit:Audit;
    activities:Activity[];
    inventories:Inventory;
}

export const TicketSchema = new mongoose.Schema({
    name: {
      type: String,
      unique: [true, 'Ticket Name must be unique'],
      required: [true, 'Ticket Name is required'],
    },
    description: {
      type: String,
      required: [true, 'Ticket description is required'],
    },
    audit: { type: Object },
    type: { type: Object, required: [true, 'Ticket Type is required'] },
    responsible: {
      type: Object,
      required: [true, 'Ticket responsible user is required'],
    },
    activities: { type: Array },
    inventories: { type: Array },
  });