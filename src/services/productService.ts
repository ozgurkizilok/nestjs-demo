import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDto } from 'src/dtos/productDto';
import { ResourceService } from 'src/libs/services/resource.service';
import { Product } from 'src/models/product';
@Injectable()
export class ProductService extends ResourceService<
  Product,
  ProductDto,
  ProductDto
> {
  constructor(
    @InjectModel('Product')
    productMongo: Model<Product>,
  ) {
    super(productMongo);
  }
}