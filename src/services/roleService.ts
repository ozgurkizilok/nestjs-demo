import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoleDto } from 'src/dtos/roleDto';
import { ResourceService } from 'src/libs/services/resource.service';
import { Role } from 'src/models/role';

@Injectable()
export class RoleService extends ResourceService<Role, RoleDto, RoleDto> {
  constructor(
    @InjectModel('Role')
    roleMongo: Model<Role>,
  ) {
    super(roleMongo);
  }
}