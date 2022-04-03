import { ProductType } from './productType';
import { Audit } from './audit';
import mongoose from 'mongoose';
export class Product {
    id:string;
    name:string;
    audit:Audit;
    type:ProductType;
}

export const ProductSchema = new mongoose.Schema({
    name: {
      type: String,
      unique: [true, 'Product Name must be unique'],
      required: [true, 'Product Name is required'],
    },
    audit: { type: Object },
    type: { type: Object, required: [true, 'Product Type is required'] },
  });