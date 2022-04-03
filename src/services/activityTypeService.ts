import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ActivityTypeDto } from 'src/dtos/activityTypeDto';
import { ResourceService } from 'src/libs/services/resource.service';
import { ActivityType } from 'src/models/activityType';


@Injectable()
export class ActivityTypeService extends ResourceService<
  ActivityType,
  ActivityTypeDto,
  ActivityTypeDto
> {
  constructor(
    @InjectModel('ActivityType')
    activityTypeMongo: Model<ActivityType>,
  ) {
    super(activityTypeMongo);
  }
}