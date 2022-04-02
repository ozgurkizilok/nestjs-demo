import { UserModule } from './modules/userModule';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import environment from './environment/environment';
import { MongooseModule } from '@nestjs/mongoose';
import { LibsModule } from './libs/libs.module';

@Module({
  imports: [UserModule,LibsModule, MongooseModule.forRoot(environment.mongoUrl)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
