import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common';
import { ProductTypeDto } from 'src/dtos/productTypeDto';
import { ProductType } from 'src/models/productType';
import { ProductTypeService } from 'src/services/productTypeService';
  @Controller('product-type')
  export class ProductTypeController {
    constructor(private readonly productTypeService: ProductTypeService) {}
  
    @Post()
    async CreateProductType(
      @Body() body: ProductTypeDto,
    ): Promise<ProductType> {
      return this.productTypeService.create(body);
    }
  
    @Get()
    async getAllProductTypes(): Promise<ProductTypeDto[]> {
      return this.productTypeService.findAll();
    }
  
    @Get(':id')
    async GetProductType(@Param() params): Promise<ProductType> {
      return this.productTypeService.findById(params.id);
    }
  
    @Put(':id')
    async updateProductType(
      @Param('id') id: string,
      @Body() productTypeDto: ProductTypeDto,
    ): Promise<ProductType> {
      return this.productTypeService.update(id, productTypeDto);
    }
  
    @Delete(':id')
    async removeProductType(@Param('id') id: string): Promise<ProductType> {
      return this.productTypeService.delete(id);
    }
  }