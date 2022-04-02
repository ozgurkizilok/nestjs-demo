import { ProductType } from './productType';
import { Audit } from './audit';
export class Product {
    id:string;
    name:string;
    audit:Audit;
    type:ProductType;
}