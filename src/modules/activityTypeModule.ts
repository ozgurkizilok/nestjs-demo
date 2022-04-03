import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ActivityTypeController } from 'src/controllers/activityTypeController';
import { ActivityTypeSchema } from 'src/models/activityType';
import { ActivityTypeService } from 'src/services/activityTypeService';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ActivityType', schema: ActivityTypeSchema },
    ]),
  ],
  controllers: [ActivityTypeController],
  providers: [ActivityTypeService],
})
export class ActivityTypeModule {}