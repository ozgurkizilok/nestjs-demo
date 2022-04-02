import { Group } from './group';
import { Role } from './role';
import { RouterModule } from '@nestjs/core';
import { Audit } from './audit';
export class User {
    id:string;
    name:string;
    surname:string;
    image:string;
    email:string;
    password:string;
    birthday:Date;
    audit:Audit;
    roles:Role;
    groups:Group[];
}