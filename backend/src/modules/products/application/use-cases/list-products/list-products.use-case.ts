import { Inject, Injectable } from '@nestjs/common';
import { PRODUCT_REPOSITORY } from '@/modules/products/domain/repositories/product.repository.interface';
import type { ProductRepository } from '@/modules/products/domain/repositories/product.repository.interface';


@Injectable()
export class ListProductsUseCase {

  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly repository: ProductRepository,
  ) {}


  async execute() {
    return this.repository.findAll();
  }
}