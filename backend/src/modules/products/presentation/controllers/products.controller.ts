import { Controller, Get, Param } from '@nestjs/common';
import {
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GetProductUseCase } from '../../application/use-cases/get-product/get-product.use-case';
import { ListProductsUseCase } from '../../application/use-cases/list-products/list-products.use-case';
import { ProductResponseDto } from './product.response.to';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(
    private readonly getProductUseCase: GetProductUseCase,
    private readonly listProductsUseCase: ListProductsUseCase,
  ) {}

  @Get()
  @ApiOperation({
    summary: 'Get all products',
    description: 'Returns a list of all available products.',
  })
  @ApiResponse({
    status: 200,
    description: 'Products retrieved successfully.',
    type: ProductResponseDto,
    isArray: true,
  })
  async findAll() {
    return this.listProductsUseCase.execute();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get product by ID',
  })
  @ApiParam({
    name: 'id',
    description: 'Product identifier',
    example: 'c4d3e7d5-8f2c-4d8a-9e8c-6c3f4d7f2b1a',
  })
  @ApiResponse({
    status: 200,
    description: 'Product retrieved successfully.',
    type: ProductResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Product not found.',
  })
  async findOne(@Param('id') id: string) {
    return this.getProductUseCase.execute(id);
  }
}