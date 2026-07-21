import { Controller, Get, Param } from '@nestjs/common';
import { GetProductUseCase } from '../../application/use-cases/get-product/get-product.use-case';
import { ListProductsUseCase } from '../../application/use-cases/list-products/list-products.use-case';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly getProductUseCase: GetProductUseCase,
    private readonly listProductsUseCase: ListProductsUseCase,
  ) {}

  @Get()
  async findAll() {
    return this.listProductsUseCase.execute();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.getProductUseCase.execute(id);
  }
}
