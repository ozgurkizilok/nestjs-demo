import { User } from './../../models/user';
import { UserCreateDto } from './../../dtos/userDto';
import { UserService } from './../../services/userService';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('user')
export class UserController {

    constructor(private userServive:UserService){}

    @Post()
    createUser(@Body() body:UserCreateDto) {
        return this.userServive.createUser(body);
    }

    @Get()
    getAllUsers():User[] {
        return this.userServive.getAllUsers();
    }

    @Get(":id")
    getUser(@Param() params):User[] {
        return this.userServive.getUserById(params.id);
    }
}
