import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common';import { TicketCreateDto } from 'src/dtos/ticketDto';
import { Ticket } from 'src/models/ticket';
import { TicketService } from 'src/services/ticketService';
;
  
  //@ApiTags('ticket')
  @Controller('ticket')
  export class TicketController {
    constructor(private readonly ticketService: TicketService) {}
  
    @Post()
    async CreateTicket(@Body() body: TicketCreateDto): Promise<Ticket> {
      return this.ticketService.create(body);
    }
  
    @Get()
    async getAllTickets(): Promise<Ticket[]> {
      return this.ticketService.findAll();
    }
  
    @Get(':id')
    async GetTicket(@Param() params): Promise<Ticket> {
      return this.ticketService.findById(params.id);
    }
  
    @Put(':id')
    async updateTicket(
      @Param('id') id: string,
      @Body() ticketUpdateDto: TicketCreateDto,
    ): Promise<Ticket> {
      return this.ticketService.update(id, ticketUpdateDto);
    }
  
    @Delete(':id')
    async removeTicket(@Param('id') id: string): Promise<Ticket> {
      return this.ticketService.delete(id);
    }
  }