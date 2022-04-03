import { InventoryType } from './inventoryType';
import { Audit } from './audit';
import { Product } from './product';
import mongoose from 'mongoose';
export class Inventory {
    id:string;
    barcode:number;
    description:string;
    audit:Audit;
    type:InventoryType;
    product:Product;
}

export const InventorySchema = new mongoose.Schema({
    barcode: {
      type: Number,
      unique: [true, 'Inventory barcode must be unique'],
      required: [true, 'Inventory barcode is required'],
    },
    description: {
      type: String,
      required: [true, 'Inventory description is required'],
    },
    audit: { type: Object },
    type: { type: Object },
    product: {
      type: Object,
      required: [true, 'Inventory Product is required'],
    },
  });