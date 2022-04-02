import { InventoryType } from './inventoryType';
import { Audit } from './audit';
import { Product } from './product';
export class Inventory {
    id:string;
    barcode:number;
    description:string;
    audit:Audit;
    type:InventoryType;
    product:Product;
}