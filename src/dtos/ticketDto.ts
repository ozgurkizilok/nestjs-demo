import { Inventory } from './../models/inventory';
import { Activity } from './../models/activity';
import { Audit } from './../models/audit';
import { User } from './../models/user';
import { TicketType } from './../models/ticketType';
export class TicketCreateDto {
    name:string;
    description:string;
    type:TicketType;
    responsible:User;
    audit:Audit;
    acitivities:Activity[];
    inventories:Inventory[];
}