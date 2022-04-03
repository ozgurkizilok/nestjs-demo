import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GroupCreateDto } from 'src/dtos/groupDto';
import { ResourceService } from 'src/libs/services/resource.service';
import { Group } from 'src/models/group';

@Injectable()
export class GroupService extends ResourceService<
  Group,
  GroupCreateDto,
  GroupCreateDto
> {
  constructor(
    @InjectModel('Group')
    groupMongo: Model<Group>,
  ) {
    super(groupMongo);
  }
}