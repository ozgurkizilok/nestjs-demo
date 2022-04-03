import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common';
import { InventoryDto } from 'src/dtos/inventoryDto';
import { Inventory } from 'src/models/inventory';
import { InventoryService } from 'src/services/inventoryService';
  
  @Controller('inventory')
  export class InventoryController {
    constructor(private readonly inventoryService: InventoryService) {}
  
    @Post()
    async CreateInventory(@Body() body: InventoryDto): Promise<Inventory> {
      return this.inventoryService.create(body);
    }
  
    @Get()
    async getAllInventories(): Promise<Inventory[]> {
      return this.inventoryService.findAll();
    }
  
    @Get(':id')
    async GetInventory(@Param() params): Promise<Inventory> {
      return this.inventoryService.findById(params.id);
    }
  
    @Put(':id')
    async updateInventory(
      @Param('id') id: string,
      @Body() inventoryDto: InventoryDto,
    ): Promise<Inventory> {
      return this.inventoryService.update(id, inventoryDto);
    }
  
    @Delete(':id')
    async removeInventory(@Param('id') id: string): Promise<Inventory> {
      return this.inventoryService.delete(id);
    }
  }