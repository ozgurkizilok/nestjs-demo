import { User } from '../models/user';
import { UserCreateDto, UserUpdateDto } from '../dtos/userDto';
import { UserService } from '../services/userService';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() body: UserCreateDto): Promise<User> {
    return await this.userService.create(body);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findById(@Param() params): Promise<User> {
    return await this.userService.findById(params.id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() userUpdateDto: UserUpdateDto
  ): Promise<User> {
    return await this.userService.update(id, userUpdateDto);
  }

  @Delete(':id')
  async delete(@Param('id') id:string): Promise<User> {
    return await this.userService.delete(id);
  }
}
