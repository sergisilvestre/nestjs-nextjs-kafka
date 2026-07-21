import { Module } from '@nestjs/common';
import { ProductsController } from './presentation/controllers/products.controller';
import { GetProductUseCase } from './application/use-cases/get-product/get-product.use-case';
import { ListProductsUseCase } from './application/use-cases/list-products/list-products.use-case';
import { PRODUCT_REPOSITORY } from './domain/repositories/product.repository.interface';
import { ProductPrismaRepository } from './infrastructure/prisma/product.prisma.repository';

@Module({
  controllers: [
    ProductsController,
  ],

  providers: [
    GetProductUseCase,
    ListProductsUseCase,

    {
      provide: PRODUCT_REPOSITORY,
      useClass: ProductPrismaRepository,
    },
  ],
})
export class ProductsModule {}