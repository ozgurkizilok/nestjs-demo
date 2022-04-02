import { UserService } from './../services/userService';
import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/user/userController';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
