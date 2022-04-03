import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Activity } from 'src/models/activity';
import { ResourceService } from 'src/libs/services/resource.service';
import { ActivityDto } from 'src/dtos/activityDto';

@Injectable()
export class ActivityService extends ResourceService<
  Activity,
  ActivityDto,
  ActivityDto
> {
  constructor(
    @InjectModel('Activity')
    activityMongo: Model<Activity>,
  ) {
    super(activityMongo);
  }
}