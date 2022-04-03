import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common';
import { ProductDto } from 'src/dtos/productDto';
import { Product } from 'src/models/product';
import { ProductService } from 'src/services/productService';
  
  @Controller('product')
  export class ProductController {
    constructor(private readonly productService: ProductService) {}
  
    @Post()
    async CreateProduct(@Body() body: ProductDto): Promise<Product> {
      return this.productService.create(body);
    }
  
    @Get()
    async getAllProducts(): Promise<Product[]> {
      return this.productService.findAll();
    }
  
    @Get(':id')
    async GetProduct(@Param() params): Promise<Product> {
      return this.productService.findById(params.id);
    }
  
    @Put(':id')
    async updateProduct(
      @Param('id') id: string,
      @Body() productDto: ProductDto,
    ): Promise<Product> {
      return this.productService.update(id, productDto);
    }
  
    @Delete(':id')
    async removeProduct(@Param('id') id: string): Promise<Product> {
      return this.productService.delete(id);
    }
  }