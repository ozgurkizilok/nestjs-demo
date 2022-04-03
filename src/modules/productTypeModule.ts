import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductTypeController } from 'src/controllers/productTypeController';
import { ProductTypeSchema } from 'src/models/productType';
import { ProductTypeService } from 'src/services/productTypeService';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ProductType', schema: ProductTypeSchema },
    ]),
  ],
  controllers: [ProductTypeController],
  providers: [ProductTypeService],
})
export class ProductTypeModule {}