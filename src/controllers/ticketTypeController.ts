import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common';
import { TicketTypeDto } from 'src/dtos/ticketTypeDto';
import { TicketType } from 'src/models/ticketType';
import { TicketTypeService } from 'src/services/ticketTypeService';
  
  //@ApiTags('ticket-type')
  @Controller('ticket-type')
  export class TicketTypeController {
    constructor(private readonly ticketTypeService: TicketTypeService) {}
  
    @Post()
    async CreateTicketType(
      @Body() body: TicketTypeDto,
    ): Promise<TicketType> {
      return this.ticketTypeService.create(body);
    }
  
    @Get()
    async getAllTicketTypes(): Promise<TicketType[]> {
      return this.ticketTypeService.findAll();
    }
  
    @Get(':id')
    async GetTicketType(@Param() params): Promise<TicketType> {
      return this.ticketTypeService.findById(params.id);
    }
  
    @Put(':id')
    async updateTicketType(
      @Param('id') id: string,
      @Body() ticketTypeDto: TicketTypeDto,
    ): Promise<TicketType> {
      return this.ticketTypeService.update(id, ticketTypeDto);
    }
  
    @Delete(':id')
    async removeTicketType(@Param('id') id: string): Promise<TicketType> {
      return this.ticketTypeService.delete(id);
    }
  }