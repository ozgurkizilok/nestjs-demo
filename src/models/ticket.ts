import { Inventory } from './inventory';
import { Audit } from './audit';
import { User } from './user';
import { TicketType } from "./ticketType";
import { Activity } from './Activity';

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