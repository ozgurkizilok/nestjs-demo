import { Module } from '@nestjs/common';;
import { MongooseModule } from '@nestjs/mongoose';
import { TicketController } from 'src/controllers/ticketController';
import { TicketSchema } from 'src/models/ticket';
import { TicketService } from 'src/services/ticketService';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Ticket', schema: TicketSchema }]),
  ],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}