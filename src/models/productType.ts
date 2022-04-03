import mongoose from 'mongoose';
import { Audit } from './audit';
export class ProductType {
    id:string;
    name:string;
    audit:Audit;
}

export const ProductTypeSchema = new mongoose.Schema({
    name: {
      type: String,
      unique: [true, 'Product Type Name must be unique'],
      required: [true, 'Product Type Name is required'],
    },
    audit: { type: Object },
  });