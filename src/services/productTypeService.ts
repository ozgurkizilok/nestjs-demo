import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductTypeDto } from 'src/dtos/productTypeDto';
import { ResourceService } from 'src/libs/services/resource.service';
import { ProductType } from 'src/models/productType';
@Injectable()
export class ProductTypeService extends ResourceService<
  ProductType,
  ProductTypeDto,
  ProductTypeDto
> {
  constructor(
    @InjectModel('ProductType')
    productTypeMongo: Model<ProductType>,
  ) {
    super(productTypeMongo);
  }
}