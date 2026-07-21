import { Injectable } from '@nestjs/common';
import { ProductRepository } from '@/modules/products/domain/repositories/product.repository.interface';
import { PrismaService } from '@/modules/shared/infrastructure/prisma/prisma.service';
import { ProductMapper } from './product.mapper';

@Injectable()
export class ProductPrismaRepository implements ProductRepository {

  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async findAll() {
    const products = await this.prisma.product.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return products.map(ProductMapper.toDomain);
  }


  async findById(id: string) {

    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    return product 
      ? ProductMapper.toDomain(product)
      : null;
  }
}