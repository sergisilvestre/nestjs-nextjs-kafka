import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PRODUCT_REPOSITORY } from '@/modules/products/domain/repositories/product.repository.interface';
import type { ProductRepository } from '@/modules/products/domain/repositories/product.repository.interface';

@Injectable()
export class GetProductUseCase {

  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly repository: ProductRepository,
  ) {}

  async execute(id: string) {

    const product = await this.repository.findById(id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }
}