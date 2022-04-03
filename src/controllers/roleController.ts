import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common';
import { RoleDto } from 'src/dtos/roleDto';
import { Role } from 'src/models/role';
import { RoleService } from 'src/services/roleService';
  
  @Controller('role')
  export class RoleController {
    constructor(private readonly roleService: RoleService) {}
  
    @Post()
    async CreateRole(@Body() body: RoleDto): Promise<Role> {
      return this.roleService.create(body);
    }
  
    @Get()
    async getAllRoles(): Promise<Role[]> {
      return this.roleService.findAll();
    }
  
    @Get(':id')
    async GetRole(@Param() params): Promise<Role> {
      return this.roleService.findById(params.id);
    }
  
    @Put(':id')
    async updateRole(
      @Param('id') id: string,
      @Body() roleDto: RoleDto,
    ): Promise<Role> {
      return this.roleService.update(id, roleDto);
    }
  
    @Delete(':id')
    async removeRole(@Param('id') id: string): Promise<Role> {
      return this.roleService.delete(id);
    }
  }