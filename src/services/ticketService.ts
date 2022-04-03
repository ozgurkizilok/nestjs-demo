import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TicketCreateDto } from 'src/dtos/ticketDto';
import { ResourceService } from 'src/libs/services/resource.service';
import { Ticket } from 'src/models/ticket';

@Injectable()
export class TicketService extends ResourceService<
  Ticket,
  TicketCreateDto,
  TicketCreateDto
> {
  constructor(
    @InjectModel('Ticket')
    ticketMongo: Model<Ticket>,
  ) {
    super(ticketMongo);
  }
}