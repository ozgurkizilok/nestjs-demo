import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TicketTypeDto } from 'src/dtos/ticketTypeDto';
import { ResourceService } from 'src/libs/services/resource.service';
import { TicketType } from 'src/models/ticketType';
@Injectable()
export class TicketTypeService extends ResourceService<
  TicketType,
  TicketTypeDto,
  TicketTypeDto
> {
  constructor(
    @InjectModel('TicketType')
    ticketTypeMongo: Model<TicketType>,
  ) {
    super(ticketTypeMongo);
  }
}