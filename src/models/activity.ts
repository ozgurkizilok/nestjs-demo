import { ActivityType } from './activityType';
import { Audit } from './audit';
export class Activity {
    id:string;
    name:string;
    audit:Audit;
    type:ActivityType;
}