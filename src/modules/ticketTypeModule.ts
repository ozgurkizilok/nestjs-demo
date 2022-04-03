import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketTypeController } from 'src/controllers/ticketTypeController';
import { TicketTypeSchema } from 'src/models/ticketType';
import { TicketTypeService } from 'src/services/ticketTypeService';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'TicketType', schema: TicketTypeSchema },
    ]),
  ],
  controllers: [TicketTypeController],
  providers: [TicketTypeService],
})
export class TicketTypeModule {}