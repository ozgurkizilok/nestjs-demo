import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common';
import { ActivityTypeDto } from 'src/dtos/activityTypeDto';
import { ActivityType } from 'src/models/activityType';
import { ActivityTypeService } from 'src/services/activityTypeService';
  
  @Controller('activity-type')
  export class ActivityTypeController {
    constructor(private readonly activityTypeService: ActivityTypeService) {}
  
    @Post()
    async CreateActivityType(
      @Body() body: ActivityTypeDto,
    ): Promise<ActivityType> {
      return this.activityTypeService.create(body);
    }
  
    @Get()
    async getAllActivityTypes(): Promise<ActivityType[]> {
      return this.activityTypeService.findAll();
    }
  
    @Get(':id')
    async GetActivityType(@Param() params): Promise<ActivityType> {
      return this.activityTypeService.findById(params.id);
    }
  
    @Put(':id')
    async updateActivityType(
      @Param('id') id: string,
      @Body() activityTypeDto: ActivityTypeDto,
    ): Promise<ActivityType> {
      return this.activityTypeService.update(id, activityTypeDto);
    }
  
    @Delete(':id')
    async removeActivityType(
      @Param('id') id: string,
    ): Promise<ActivityType> {
      return this.activityTypeService.delete(id);
    }
  }