import { UserSchema } from './../models/user';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './../services/userService';
import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/user/userController';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
