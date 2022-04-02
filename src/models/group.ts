import { Audit } from './audit';
import { Role } from './role';
export class Group {
    id:string;
    name:string;
    description:string;
    audit:Audit
    roles:Role[];
}