import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common';
import { ActivityDto } from 'src/dtos/activityDto';
import { Activity } from 'src/models/activity';
import { ActivityService } from 'src/services/activityService';
  
  @Controller('activity')
  export class ActivityController {
    constructor(private readonly activityService: ActivityService) {}
  
    @Post()
    async CreateActivity(@Body() body: ActivityDto): Promise<Activity> {
      return this.activityService.create(body);
    }
  
    @Get()
    async getAllActivities(): Promise<Activity[]> {
      return this.activityService.findAll();
    }
  
    @Get(':id')
    async GetActivity(@Param() params): Promise<Activity> {
      return this.activityService.findById(params.id);
    }
  
    @Put(':id')
    async updateActivity(
      @Param('id') id: string,
      @Body() activityDto: ActivityDto,
    ): Promise<Activity> {
      return this.activityService.update(id, activityDto);
    }
  
    @Delete(':id')
    async removeActivity(@Param('id') id: string): Promise<Activity> {
      return this.activityService.delete(id);
    }
  }