
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InventoryDto } from 'src/dtos/inventoryDto';
import { ResourceService } from 'src/libs/services/resource.service';
import { Inventory } from 'src/models/inventory';

@Injectable()
export class InventoryService extends ResourceService<
  Inventory,
  InventoryDto,
  InventoryDto
> {
  constructor(
    @InjectModel('Inventory')
    inventoryMongo: Model<Inventory>,
  ) {
    super(inventoryMongo);
  }
}