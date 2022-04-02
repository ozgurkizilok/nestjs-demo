import { RoleDto } from "./roleDto";

export class GroupCreateDto {
    name:string;
    description:string;
}

export class GroupRolesDto {
    roles:RoleDto[];
}