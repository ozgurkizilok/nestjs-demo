import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common';
import { GroupCreateDto } from 'src/dtos/groupDto';
import { Group } from 'src/models/group';
import { GroupService } from 'src/services/groupService';
  
  @Controller('group')
  export class GroupController {
    constructor(private readonly groupService: GroupService) {}
  
    @Post()
    async CreateGroup(@Body() body: GroupCreateDto): Promise<Group> {
      return this.groupService.create(body);
    }
  
    @Get()
    async getAllGroups(): Promise<Group[]> {
      return this.groupService.findAll();
    }
  
    @Get(':id')
    async GetGroup(@Param() params): Promise<Group> {
      return this.groupService.findById(params.id);
    }
  
    @Put(':id')
    async updateGroup(
      @Param('id') id: string,
      @Body() groupDto: GroupCreateDto,
    ): Promise<Group> {
      return this.groupService.update(id, groupDto);
    }
  
    @Delete(':id')
    async removeGroup(@Param('id') id: string): Promise<Group> {
      return this.groupService.delete(id);
    }
  }